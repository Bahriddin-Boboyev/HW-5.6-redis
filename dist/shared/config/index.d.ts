export interface IConfig {
    port: number;
    db: IDatebaseConfig;
    jwt: IJwtConfig;
}
export interface IDatebaseConfig {
    host: string;
    port: number;
    name: string;
}
export interface IJwtConfig {
    secret: string;
}
declare const _default: () => IConfig;
export default _default;
