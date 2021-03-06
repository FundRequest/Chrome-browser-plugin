import BrowserPlugin from "./BrowserPlugin";
import Utils from "./Utils";
import IssueProperties from "./models/IssueProperties";

export default class Settings {
    private static _settings: object = null;

    public static async getSettings() {
        if (this._settings == null) {
            this._settings = { loaded: false };
            let url = await Settings.getFundrequestUrl();

            if (url.length > 0) {
                try {
                    this._settings = await Utils.getJSON(`${url}/pubenv`);
                    this._settings['loaded'] = true;
                } catch (e) {
                    console.log(`Something went wrong getting the settings from ${await Settings.getFundrequestUrl()}`, e);
                }
            }
        }

        return this._settings;
    }

    public static async getFundrequestUrl(): Promise<string> {
        let network = await Settings.getNetwork();
        let url = "";
        switch (network) {
            case 'prod':
                url = Settings.mainUrl;
                break;
            case 'staging':
                url = Settings.stagingUrl;
                break;
            case 'tst1':
                url = Settings.tst1Url;
                break;
            case 'tst2':
                url = Settings.tst2Url;
                break;
            case 'local':
                url = Settings.localUrl;
                break;
        }
        return url;
    }

    public static async getTransactionUrl(transactionId): Promise<string> {
        let network = await Settings.getNetwork();
        let url = "";
        switch (network) {
            case 'prod':
                url = `https://etherscan.io/tx/${transactionId}`;
                break;
            case 'staging':
            case 'tst1':
            case 'local':
                url = `https://kovan.etherscan.io/tx/${transactionId}`;
                break;
        }
        return url;
    }

    public static async getEthAddress(): Promise<string> {
        return BrowserPlugin.get('ethAddress');
    }

    public static async getTokenContractAddress(): Promise<string> {
        return Settings.getProperty('io.fundrequest.contract.token.address');

    }

    public static async getFundRequestContractAddress(): Promise<string> {
        return Settings.getProperty('io.fundrequest.contract.fund-request.address');
    }

    public static async getProviderApi(): Promise<string> {
        return Settings.getProperty('io.fundrequest.ethereum.endpoint.url');
    }

    public static async getProperty(propertyName: string) {
        let settings = await Settings.getSettings();
        if (settings && settings.hasOwnProperty(propertyName)) {
            return settings[propertyName];
        } else {
            return null;
        }
    }

    public static async getFundUrl(githubUrl: string): Promise<string> {
        let url = await Settings.getFundrequestUrl();
        return `${url}/fund/github?url=${githubUrl}`;
    }

    public static async getClaimUrl(githubUrl: string): Promise<string> {
        let props = Settings.getIssuePropertiesFromUrl(githubUrl);
        let url = await Settings.getFundrequestUrl();
        return `${url}/requests/github/${props.owner}/${props.repo}/${props.issueNumber}`;
    }

    public static async getClaimablePropertiesUrl(platformId: string): Promise<string> {
        let props = Settings.getIssueProperties(platformId);
        let url = await Settings.getFundrequestUrl();
        return `${url}/rest/requests/github/${props.owner}/${props.repo}/${props.issueNumber}/claimable`;
    }

    public static async getRequestDetailsUrl(platformId: string): Promise<string> {
        let props = Settings.getIssueProperties(platformId);
        let url = await Settings.getFundrequestUrl();
        return `${url}/rest/requests/github/${props.owner}/${props.repo}/${props.issueNumber}`;
    }

    public static getOptionsUrl(): string {
        return BrowserPlugin.getURL("options.html");
    }

    public static async getNetwork(): Promise<string> {
        return BrowserPlugin.get('network', 'prod');
    }

    private static getIssueProperties(platformId: string): IssueProperties {
        let matches = /^(.+)\|FR\|(.+)\|FR\|(\d+)$/i.exec(platformId);
        let issueProperties = new IssueProperties();
        issueProperties.owner = matches[1];
        issueProperties.repo = matches[2];
        issueProperties.issueNumber = Number.parseInt(matches[3]);

        return issueProperties;
    }

    private static getIssuePropertiesFromUrl(githubUrl: string): IssueProperties {
        let matches = /^https:\/\/github\.com\/(.+)\/(.+)\/issues\/(\d+)$/i.exec(githubUrl);
        let issueProperties = new IssueProperties();
        issueProperties.owner = matches[1];
        issueProperties.repo = matches[2];
        issueProperties.issueNumber = Number.parseInt(matches[3]);

        return issueProperties;
    }

    private static get mainUrl() {
        return 'https://fundrequest.io';
    }

    private static get tst1Url() {
        return 'https://tst1.fundrequest.io';
    }

    private static get tst2Url() {
        return 'https://tst2.fundrequest.io';
    }

    private static get stagingUrl() {
        return 'https://staging.fundrequest.io';
    }

    private static get localUrl() {
        return 'http://localhost:8080';
    }
}