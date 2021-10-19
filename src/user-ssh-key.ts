// https://www.terraform.io/docs/providers/github/r/user_ssh_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserSshKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/user_ssh_key.html#key UserSshKey#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/user_ssh_key.html#title UserSshKey#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/user_ssh_key.html github_user_ssh_key}
*/
export class UserSshKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_user_ssh_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/user_ssh_key.html github_user_ssh_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserSshKeyConfig
  */
  public constructor(scope: Construct, id: string, config: UserSshKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'github_user_ssh_key',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._key = config.key;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
