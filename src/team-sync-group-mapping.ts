// https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamSyncGroupMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}
  */
  readonly teamSlug: string;
  /**
  * group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping#group TeamSyncGroupMapping#group}
  */
  readonly group?: TeamSyncGroupMappingGroup[] | cdktf.IResolvable;
}
export interface TeamSyncGroupMappingGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping#group_description TeamSyncGroupMapping#group_description}
  */
  readonly groupDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping#group_id TeamSyncGroupMapping#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping#group_name TeamSyncGroupMapping#group_name}
  */
  readonly groupName: string;
}

export function teamSyncGroupMappingGroupToTerraform(struct?: TeamSyncGroupMappingGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_description: cdktf.stringToTerraform(struct!.groupDescription),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping github_team_sync_group_mapping}
*/
export class TeamSyncGroupMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_team_sync_group_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping github_team_sync_group_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamSyncGroupMappingConfig
  */
  public constructor(scope: Construct, id: string, config: TeamSyncGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team_sync_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '4.24.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._teamSlug = config.teamSlug;
    this._group = config.group;
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

  // team_slug - computed: false, optional: false, required: true
  private _teamSlug?: string; 
  public get teamSlug() {
    return this.getStringAttribute('team_slug');
  }
  public set teamSlug(value: string) {
    this._teamSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamSlugInput() {
    return this._teamSlug;
  }

  // group - computed: false, optional: true, required: false
  private _group?: TeamSyncGroupMappingGroup[] | cdktf.IResolvable; 
  public get group() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('group')));
  }
  public set group(value: TeamSyncGroupMappingGroup[] | cdktf.IResolvable) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      team_slug: cdktf.stringToTerraform(this._teamSlug),
      group: cdktf.listMapper(teamSyncGroupMappingGroupToTerraform)(this._group),
    };
  }
}
