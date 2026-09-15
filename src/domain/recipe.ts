export class Recipe {
  _name!: string;
  _category?: string;
  _description?: string;
  _preparationTime!: number;

  constructor(aName: string) {
    this.name = aName;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(aDescription: string) {
    this._description = aDescription.trim();
  }

  get preparationTime(): number {
    return this._preparationTime;
  }

  set preparationTime(aPreparationTime: number) {
    if (!Number.isFinite(aPreparationTime) || aPreparationTime < 0) {
      throw new Error("El tiempo de preparación debe ser mayor o igual a 0.");
    }
    this._preparationTime = aPreparationTime;
  }

  toString(): string {
    return `Receta: ${this.name} - Categoría: ${this.category} - Tiempo de preparación: ${this.preparationTime} minutos`;
  }
}
