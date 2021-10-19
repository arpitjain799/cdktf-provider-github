// https://www.terraform.io/docs/providers/github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GithubProviderConfig {
  /**
  * The GitHub Base API URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#base_url GithubProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Enable `insecure` mode for testing purposes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#insecure GithubProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The GitHub organization name to manage. Use this field instead of `owner` when managing organization accounts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#organization GithubProvider#organization}
  */
  readonly organization?: string;
  /**
  * The GitHub owner name to manage. Use this field instead of `organization` when managing individual accounts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#owner GithubProvider#owner}
  */
  readonly owner?: string;
  /**
  * The OAuth token used to connect to GitHub. Anonymous mode is enabled if both `token` and `app_auth` are not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#token GithubProvider#token}
  */
  readonly token?: string;
  /**
  * Amount of time in milliseconds to sleep in between writes to GitHub API. Defaults to 1000ms or 1s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#write_delay_ms GithubProvider#write_delay_ms}
  */
  readonly writeDelayMs?: number;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#alias GithubProvider#alias}
  */
  readonly alias?: string;
  /**
  * app_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#app_auth GithubProvider#app_auth}
  */
  readonly appAuth?: GithubProviderAppAuth;
}
export interface GithubProviderAppAuth {
  /**
  * The GitHub App ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#id GithubProvider#id}
  */
  readonly id: string;
  /**
  * The GitHub App installation instance ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#installation_id GithubProvider#installation_id}
  */
  readonly installationId: string;
  /**
  * The GitHub App PEM file contents.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github#pem_file GithubProvider#pem_file}
  */
  readonly pemFile: string;
}

function githubProviderAppAuthToTerraform(struct?: GithubProviderAppAuthOutputReference | GithubProviderAppAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    installation_id: cdktf.stringToTerraform(struct!.installationId),
    pem_file: cdktf.stringToTerraform(struct!.pemFile),
  }
}

export class GithubProviderAppAuthOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this._id;
  }
  public set id(value: string| undefined) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // installation_id - computed: false, optional: false, required: true
  private _installationId?: string; 
  public get installationId() {
    return this._installationId;
  }
  public set installationId(value: string| undefined) {
    this._installationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId
  }

  // pem_file - computed: false, optional: false, required: true
  private _pemFile?: string; 
  public get pemFile() {
    return this._pemFile;
  }
  public set pemFile(value: string| undefined) {
    this._pemFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemFileInput() {
    return this._pemFile
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github github}
*/
export class GithubProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GithubProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GithubProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersionConstraint: '~> 4.0'
      },
      terraformProviderSource: 'integrations/github'
    });
    this._baseUrl = config.baseUrl;
    this._insecure = config.insecure;
    this._organization = config.organization;
    this._owner = config.owner;
    this._token = config.token;
    this._writeDelayMs = config.writeDelayMs;
    this._alias = config.alias;
    this._appAuth = config.appAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string | undefined; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined| undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable | undefined; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string | undefined; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined| undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string | undefined; 
  public get owner() {
    return this._owner;
  }
  public set owner(value: string | undefined| undefined) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // token - computed: false, optional: true, required: false
  private _token?: string | undefined; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined| undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // write_delay_ms - computed: false, optional: true, required: false
  private _writeDelayMs?: number | undefined; 
  public get writeDelayMs() {
    return this._writeDelayMs;
  }
  public set writeDelayMs(value: number | undefined| undefined) {
    this._writeDelayMs = value;
  }
  public resetWriteDelayMs() {
    this._writeDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDelayMsInput() {
    return this._writeDelayMs
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string | undefined; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined| undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // app_auth - computed: false, optional: true, required: false
  private _appAuth?: GithubProviderAppAuth | undefined; 
  public get appAuth() {
    return this._appAuth;
  }
  public set appAuth(value: GithubProviderAppAuth | undefined| undefined) {
    this._appAuth = value;
  }
  public resetAppAuth() {
    this._appAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appAuthInput() {
    return this._appAuth
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_url: cdktf.stringToTerraform(this._baseUrl),
      insecure: cdktf.booleanToTerraform(this._insecure),
      organization: cdktf.stringToTerraform(this._organization),
      owner: cdktf.stringToTerraform(this._owner),
      token: cdktf.stringToTerraform(this._token),
      write_delay_ms: cdktf.numberToTerraform(this._writeDelayMs),
      alias: cdktf.stringToTerraform(this._alias),
      app_auth: githubProviderAppAuthToTerraform(this._appAuth),
    };
  }
}
