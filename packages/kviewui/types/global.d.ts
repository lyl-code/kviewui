declare module "*.ttf" {
    const src: string;
    export default src;
}

declare global {
    interface Uni {
        kui: {
            install: Function;
            theme: KuiNamespace.Theme;
            app: App<Element>;
            utils: {
                element: {
                    getElId: (prefix: string) => string;
                    useKviewuiRect: (eleRef: (Element | Window | any) | Ref<Element | Window | any>,
                        eleId: string = '',
                        proxy: any) => any;
                };
                image: {
                    getImageInfo: (src: string) => Promise<any>;
                    fileToUrl: (file: File) => string;
                    compress: (file: KuiNamespace.ImageFile, quality: number) => Promise<KuiNamespace.ImageFile>;
                    isImage: (url: string) => boolean;
                };
                is: {
                    isNumber: (e: any) => boolean;
                    isString: (e: any) => boolean;
                    isObject: (e: any) => boolean;
                    isBoolean: (e: any) => boolean;
                    isArray: (e: any) => boolean;
                };
                prompt: {
                    showToast: (title: string, icon?: 'success'|'loading'|'error'|'none') => void;
                    hideToast: () => void;
                    showLoading: (title: string) => void;
                    hideLoading: () => void;
                    showModal: (title?: string, 
                        content?: string, 
                        showCancel?: boolean,
                        cancelText?: string,
                        confirmText?: string,
                        cancelColor?: string,
                        confirmColor?: string,
                        editable?: boolean,
                        success?: any,
                        fail?: any,
                        complete?: any) => void;
                };
                size: {
                    getFontSize: (size: string | number) => string;
                    getUnitSize: (size: string | number) => string;
                };
                system: {
                    setCliboardData: (data: string, showToast?: boolean) => Promise<any>;
                };
                theme: {
                    themeColors: string[];
                    isThemeColor: (color: string) => boolean;
                };
                use: {
                    useThrottle: (fn: Function, interval: number, options?: {
                        leading?: boolean;
                        trailing?: boolean;
                    }) => {
                        (this: unknown, ...args: any[]): Promise<unknown>;
                        cancel: () => void;
                        flush: (this: unknown, ...args: any[]) => Promise<unknown>;
                    };
                    useDebounce: (fn: Function, delay: number, immediate: boolean = false) => {
                        (this: unknown, ...args: any[]): Promise<unknown>;
                        cancel: () => void;
                        flush: (this: unknown, ...args: any[]) => Promise<unknown>;
                    };
                    useTaskReduce: (tasks: Array<() => Promise<any>>) => Promise<any>;
                };
                unit: {
                    getUnitByUnit: (e: any) => string;
                    getNumberByUnit: (e: any) => any;
                }
            };
        }
    }
}

export { }