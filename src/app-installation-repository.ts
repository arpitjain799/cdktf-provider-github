// https://www.terraform.io/docs/providers/github/r/app_installation_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppInstallationRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/app_installation_repository.html#installation_id AppInstallationRepository#installation_id}
  */
  readonly installationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/app_installation_repository.html#repository AppInstallationRepository#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/app_installation_repository.html github_app_installation_repository}
*/
export class AppInstallationRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_app_installation_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/app_installation_repository.html github_app_installation_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppInstallationRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: AppInstallationRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'github_app_installation_repository',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._installationId = config.installationId;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installation_id - computed: false, optional: false, required: true
  private _installationId?: string; 
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }
  public set installationId(value: string) {
    this._installationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getNumberAttribute('repo_id');
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      installation_id: cdktf.stringToTerraform(this._installationId),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
