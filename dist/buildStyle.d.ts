import { CSSProperties } from 'react';
import { AllProps } from './styleProps';
import { SafeStyleSchema, StyleStructure } from './schema';
export declare function startTheme<TColors extends string, TSpacing extends string, TBorderRadii extends string>(theme: {
    colors: {
        [key in TColors]: string;
    };
    spacing: {
        [key in TSpacing]: number | string;
    };
    borderRadii: {
        [key in TBorderRadii]: number;
    };
}): {
    addBaseClasses: <TBaseClassesKeys extends string>(baseClasses: { [className in TBaseClassesKeys]: AllProps<TColors, TSpacing, TBorderRadii>; }) => {
        addDefaultClasses: (defaultClasses: {
            view?: TBaseClassesKeys[] | undefined;
        }) => {
            addClasses: <TViewsKeys extends string>(views: { [className_1 in TViewsKeys]: StyleStructure<TColors, TSpacing, TBorderRadii, TBaseClassesKeys>; }) => SafeStyleSchema<TColors, TSpacing, TBorderRadii, TBaseClassesKeys, TViewsKeys>;
        };
    };
};
declare type ClassKey = {
    key: string;
    property: string;
    value: any;
};
export declare function useSafeStyle<TColors extends string, TSpacing extends string, TBorderRadii extends string, TBaseClassesKeys extends string, TViewsKeys extends string>(theme: SafeStyleSchema<TColors, TSpacing, TBorderRadii, TBaseClassesKeys, TViewsKeys>): {
    spacing: (spacing: TSpacing) => number | string;
    color: (color: TColors) => string;
    view: (classes: (TViewsKeys | TBaseClassesKeys | ClassKey)[], debugStyle?: boolean) => CSSProperties;
};
export declare function SafeStyleProvider({ children, theme }: any): any;
export declare type SafeStyleProps<TSafeStyleKeys extends string, TColor extends string, TSpacing extends string, TBorderRadii extends string> = {
    [key in TSafeStyleKeys]?: boolean;
} & {
    [key in keyof AllProps<TColor, TSpacing, TBorderRadii>]?: AllProps<TColor, TSpacing, TBorderRadii>[key];
};
export declare type SafeStylePropsNoBespoke<TSafeStyleKeys extends string, TColor extends string, TSpacing extends string, TBorderRadii extends string> = {
    [key in TSafeStyleKeys]?: boolean;
};
export declare type SafeStylePropsPrefix<TPrefix extends string, TSafeStyleKeys extends string, TColor extends string, TSpacing extends string, TBorderRadii extends string> = {
    [key in TSafeStyleKeys as `${TPrefix}${TSafeStyleKeys}`]?: boolean;
} & {
    [key in keyof AllProps<TColor, TSpacing, TBorderRadii> as `${TPrefix}${key}`]?: AllProps<TColor, TSpacing, TBorderRadii>[key];
};
export declare function makeViewPropsPrefix<TPrefix extends string, TColors extends string, TSpacing extends string, TBorderRadii extends string, TBaseClassesKeys extends string, TViewsKeys extends string>(safeStyle: SafeStyleSchema<TColors, TSpacing, TBorderRadii, TBaseClassesKeys, TViewsKeys>, prefix: TPrefix): SafeStylePropsPrefix<TPrefix, TViewsKeys | TBaseClassesKeys, TColors, TSpacing, TBorderRadii>;
export declare function makeViewProps<TColors extends string, TSpacing extends string, TBorderRadii extends string, TBaseClassesKeys extends string, TViewsKeys extends string>(safeStyle: SafeStyleSchema<TColors, TSpacing, TBorderRadii, TBaseClassesKeys, TViewsKeys>): SafeStyleProps<TViewsKeys | TBaseClassesKeys, TColors, TSpacing, TBorderRadii>;
export declare function extractSafeStyleProps<T extends {
    [key: string]: any;
}, TColors extends string, TSpacing extends string, TBorderRadii extends string, TBaseClassesKeys extends string, TViewsKeys extends string>(safeStyle: SafeStyleSchema<TColors, TSpacing, TBorderRadii, TBaseClassesKeys, TViewsKeys>, props: T, prefix?: string): {
    newProps: T;
    keys: (ClassKey | (TBaseClassesKeys | TViewsKeys))[];
};
export declare function makeUseBespokeStyle<TColors extends string, TSpacing extends string, TBorderRadii extends string, TBaseClassesKeys extends string, TViewsKeys extends string, TBespokeClasses extends string>(theme: SafeStyleSchema<TColors, TSpacing, TBorderRadii, TBaseClassesKeys, TViewsKeys>): <TBespokeStyles extends string>(classes: { [key in TBespokeStyles]: StyleStructure<TColors, TSpacing, TBorderRadii, TBaseClassesKeys>; }) => { [key_1 in TBespokeStyles]: ({ [e in TBespokeStyles]: true; } & import("./styleProps").BackgroundColorProps<TColors> & import("./styleProps").ColorProps<TColors> & import("./styleProps").OpacityProps & import("./styleProps").SpacingProps<TSpacing> & import("./styleProps").TypographyProps & import("./styleProps").LayoutProps & import("./styleProps").PositionProps & {
    borderBottomWidth?: import("csstype").Property.BorderBottomWidth<string | number> | undefined;
    borderLeftWidth?: import("csstype").Property.BorderLeftWidth<string | number> | undefined;
    borderRightWidth?: import("csstype").Property.BorderRightWidth<string | number> | undefined;
    borderStyle?: import("csstype").Property.BorderStyle | undefined;
    borderTopWidth?: import("csstype").Property.BorderTopWidth<string | number> | undefined;
    borderWidth?: import("csstype").Property.BorderWidth<string | number> | undefined;
} & {
    borderColor?: import("./styleProps").RawColor | TColors | undefined;
    borderTopColor?: import("./styleProps").RawColor | TColors | undefined;
    borderRightColor?: import("./styleProps").RawColor | TColors | undefined;
    borderLeftColor?: import("./styleProps").RawColor | TColors | undefined;
    borderBottomColor?: import("./styleProps").RawColor | TColors | undefined;
} & {
    borderRadius?: number | TBorderRadii | undefined;
    borderBottomLeftRadius?: number | TBorderRadii | undefined;
    borderBottomRightRadius?: number | TBorderRadii | undefined;
    borderTopLeftRadius?: number | TBorderRadii | undefined;
    borderTopRightRadius?: number | TBorderRadii | undefined;
})[]; };
export {};
