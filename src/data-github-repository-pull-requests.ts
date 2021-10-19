// https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryPullRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html#base_ref DataGithubRepositoryPullRequests#base_ref}
  */
  readonly baseRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html#base_repository DataGithubRepositoryPullRequests#base_repository}
  */
  readonly baseRepository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html#head_ref DataGithubRepositoryPullRequests#head_ref}
  */
  readonly headRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html#owner DataGithubRepositoryPullRequests#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html#sort_by DataGithubRepositoryPullRequests#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html#sort_direction DataGithubRepositoryPullRequests#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html#state DataGithubRepositoryPullRequests#state}
  */
  readonly state?: string;
}
export class DataGithubRepositoryPullRequestsResults extends cdktf.ComplexComputedList {

  // base_ref - computed: true, optional: false, required: false
  public get baseRef() {
    return this.getStringAttribute('base_ref');
  }

  // base_sha - computed: true, optional: false, required: false
  public get baseSha() {
    return this.getStringAttribute('base_sha');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // draft - computed: true, optional: false, required: false
  public get draft() {
    return this.getBooleanAttribute('draft') as any;
  }

  // head_owner - computed: true, optional: false, required: false
  public get headOwner() {
    return this.getStringAttribute('head_owner');
  }

  // head_ref - computed: true, optional: false, required: false
  public get headRef() {
    return this.getStringAttribute('head_ref');
  }

  // head_repository - computed: true, optional: false, required: false
  public get headRepository() {
    return this.getStringAttribute('head_repository');
  }

  // head_sha - computed: true, optional: false, required: false
  public get headSha() {
    return this.getStringAttribute('head_sha');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // maintainer_can_modify - computed: true, optional: false, required: false
  public get maintainerCanModify() {
    return this.getBooleanAttribute('maintainer_can_modify') as any;
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // opened_at - computed: true, optional: false, required: false
  public get openedAt() {
    return this.getNumberAttribute('opened_at');
  }

  // opened_by - computed: true, optional: false, required: false
  public get openedBy() {
    return this.getStringAttribute('opened_by');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html github_repository_pull_requests}
*/
export class DataGithubRepositoryPullRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_repository_pull_requests";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/repository_pull_requests.html github_repository_pull_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryPullRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryPullRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_pull_requests',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._baseRef = config.baseRef;
    this._baseRepository = config.baseRepository;
    this._headRef = config.headRef;
    this._owner = config.owner;
    this._sortBy = config.sortBy;
    this._sortDirection = config.sortDirection;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_ref - computed: false, optional: true, required: false
  private _baseRef?: string | undefined; 
  public get baseRef() {
    return this.getStringAttribute('base_ref');
  }
  public set baseRef(value: string | undefined) {
    this._baseRef = value;
  }
  public resetBaseRef() {
    this._baseRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRefInput() {
    return this._baseRef
  }

  // base_repository - computed: false, optional: false, required: true
  private _baseRepository?: string; 
  public get baseRepository() {
    return this.getStringAttribute('base_repository');
  }
  public set baseRepository(value: string) {
    this._baseRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRepositoryInput() {
    return this._baseRepository
  }

  // head_ref - computed: false, optional: true, required: false
  private _headRef?: string | undefined; 
  public get headRef() {
    return this.getStringAttribute('head_ref');
  }
  public set headRef(value: string | undefined) {
    this._headRef = value;
  }
  public resetHeadRef() {
    this._headRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headRefInput() {
    return this._headRef
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string | undefined; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string | undefined) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // results - computed: true, optional: false, required: false
  public results(index: string) {
    return new DataGithubRepositoryPullRequestsResults(this, 'results', index);
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string | undefined; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string | undefined) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string | undefined; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string | undefined) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection
  }

  // state - computed: false, optional: true, required: false
  private _state?: string | undefined; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_ref: cdktf.stringToTerraform(this._baseRef),
      base_repository: cdktf.stringToTerraform(this._baseRepository),
      head_ref: cdktf.stringToTerraform(this._headRef),
      owner: cdktf.stringToTerraform(this._owner),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_direction: cdktf.stringToTerraform(this._sortDirection),
      state: cdktf.stringToTerraform(this._state),
    };
  }
}
