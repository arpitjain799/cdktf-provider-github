// https://www.terraform.io/docs/providers/github/r/actions_runner_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsRunnerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group.html#name ActionsRunnerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group.html#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}
  */
  readonly selectedRepositoryIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group.html#visibility ActionsRunnerGroup#visibility}
  */
  readonly visibility: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group.html github_actions_runner_group}
*/
export class ActionsRunnerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_actions_runner_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/actions_runner_group.html github_actions_runner_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsRunnerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsRunnerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_runner_group',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._selectedRepositoryIds = config.selectedRepositoryIds;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allows_public_repositories - computed: true, optional: false, required: false
  public get allowsPublicRepositories() {
    return this.getBooleanAttribute('allows_public_repositories') as any;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default') as any;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherited - computed: true, optional: false, required: false
  public get inherited() {
    return this.getBooleanAttribute('inherited') as any;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // runners_url - computed: true, optional: false, required: false
  public get runnersUrl() {
    return this.getStringAttribute('runners_url');
  }

  // selected_repositories_url - computed: true, optional: false, required: false
  public get selectedRepositoriesUrl() {
    return this.getStringAttribute('selected_repositories_url');
  }

  // selected_repository_ids - computed: false, optional: true, required: false
  private _selectedRepositoryIds?: number[] | undefined; 
  public get selectedRepositoryIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('selected_repository_ids') as any;
  }
  public set selectedRepositoryIds(value: number[] | undefined) {
    this._selectedRepositoryIds = value;
  }
  public resetSelectedRepositoryIds() {
    this._selectedRepositoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRepositoryIdsInput() {
    return this._selectedRepositoryIds
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      selected_repository_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._selectedRepositoryIds),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }
}
