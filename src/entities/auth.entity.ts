export namespace AuthEntity {
  export interface Register {
    name: string;
    email: string;
    password: string;
    id?: string;
    roles?: string[];
  }
}
