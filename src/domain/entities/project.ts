export type ProjectDto = {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  techs: string[];
  favorite?: boolean;
};

export class Project {
  public id!: string;
  public title!: string;
  public description!: string;
  public updatedAt!: Date;
  public techs!: string[];
  public favorite?: boolean;

  constructor(props: ProjectDto) {
    Object.assign(this, props);
    this.updatedAt = new Date(props.updatedAt);
  }

  setFavorite(isFavorite: boolean) {
    this.favorite = isFavorite;
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      updatedAt: this.updatedAt.toISOString(),
      techs: this.techs,
      favorite: this.favorite,
    };
  }
}
