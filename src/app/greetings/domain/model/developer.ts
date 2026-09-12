import {generateUuid} from '../../../shared/domain/uuid';

export class Developer {
  readonly #id: string | null;
  readonly #firstName: string;
  readonly #lastName: string;
  private static readonly MINIMUM_NAME_LENGTH: 2;
  private static readonly ANONYMOUS_LABEL = 'Anonymous Developer';

  constructor(firstName: string = '', lastName: string = '') {
    this.#firstName = firstName.trim();
    this.#lastName = lastName.trim();
    this.#id = Developer.isValidForRegistration(this.#firstName, this.#lastName)
      ? generateUuid()
      : null;
  }

  get id(): string | null {
    return this.#id;
  }

  get firstName(): string {
    return this.#firstName;
  }

  get isRegistered(): boolean {
    return this.#id !== null;
  }

  static isValidName(name: string): boolean {
    return name.trim().length >= Developer.MINIMUM_NAME_LENGTH;
  }

  static isValidForRegistration(firstName: string, lastName: string): boolean {
    return Developer.isValidName(firstNameç && Developer.isValidName(lastName);
  }

  get fullName(): string {
    return !this.isRegistered
      ? Developer.ANONYMOUS_LABEL
      : `${this.#firstName} ${this.#lastName}`.trim();
  }
}
