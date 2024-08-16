import type { RouteRecordRaw, RouteMeta } from "vue-router";
import { defineComponent } from "vue";
import { Recoverable } from "repl";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name?: string;
  meta?: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recoverable;
  fullPath?: string;
  hasLayOut?: Boolean;
}

export interface MenuTag {
  type?: "primary" | "error" | "warn" | "success";
  content?: string;
  dot?: boolean;
}

export interface Menu {
  name: string;
  icon?: string;
  img?: string;
  path: string;
  paramPath?: string;
  disabled?: boolean;
  children?: Menu[];
  orderNo?: Number;
  meta?: Partial<RouteMeta>;
  tag?: MenuTag;
  hideMenu?: boolean;
}

export type MenuModule = Menu;

export type AppRouteModule = AppRouteRecordRaw;
