declare module "*.ttf" {
    const src: string;
    export default src;
}

declare global {
    interface Uni {
        kui: {
            install: Function
            theme: KuiNamespace.Theme
            app: App<Element>
        }
    }
}