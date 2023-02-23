import {
    App,
    Component,
    ComponentPropsOptions, 
    defineComponent, 
    ExtractPropTypes,
    RenderFunction,
    SetupContext,
} from 'vue';

/**
 * 创建组件
 * @param name 
 * @returns 
 */
export const createComponent = (name: string) => {
    const componentName = `kui-${name}`;

    return {
        componentName,
        create: function<
            PropsOptions extends Readonly<ComponentPropsOptions>,
            Props extends Readonly<ExtractPropTypes<PropsOptions>>,
        >(componentOptions: {
            name?: string;
            install?: (vue: App) => void;
            props?: PropsOptions;
            components?: Record<string, Component>;
            setup?: (props: Props, setupContext: SetupContext) => RenderFunction | Record<string, any> | any;
            emits: string[];
            options?: any;
            [optionName: string]: any;
        }) {
            componentOptions.name = componentName;
            componentOptions.install = (vue: App) => {
                vue.component(componentOptions.name as string, componentOptions as any);
            };

            // 设置小程序虚拟节点
            componentOptions.options = {
                // 小程序虚拟节点设置
			    virtualHost: true,
                ...componentOptions.options
            }

            return defineComponent(componentOptions as any);
        } as typeof defineComponent,
    };
}