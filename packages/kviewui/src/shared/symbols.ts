import { InjectionKey, Ref } from "vue";
import { ConfigProviderProps } from "../config-provider/types";
import { SpaceProvideOptions } from "./types";
import { RowProvideOptions } from '../row/types';

/**
 * 全局的space组件provideKey
 */
export const spaceProviderKey: InjectionKey<SpaceProvideOptions> = Symbol();

/**
 * 全局的row组件provideKey
 */
export const rowProvideKey: InjectionKey<RowProvideOptions | undefined> = Symbol();

/**
 * 全局的config-provider组件provideKey
 */
export const configProviderInjectionKey: InjectionKey<ConfigProviderProps> = Symbol('KuiConfigProvider');