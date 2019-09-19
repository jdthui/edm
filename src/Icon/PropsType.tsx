export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Select the icon you want to show */
    value:
        | 'addCircle'
        | 'alert'
        | 'arrow'
        | 'baby'
        | 'babyActive'
        | 'babyDefault'
        | 'boy'
        | 'boyActive'
        | 'boyDefault'
        | 'close'
        | 'dadActive'
        | 'dadDefault'
        | 'delete'
        | 'download'
        | 'edit'
        | 'eyeClose'
        | 'eyeOpen'
        | 'girl'
        | 'girlActive'
        | 'girlDefault'
        | 'heartActive'
        | 'heartDefault'
        | 'loading'
        | 'momActive'
        | 'momDefault'
        | 'more'
        | 'remind'
        | 'selected'
        | 'share'
        | 'successful';
    /** Ionc's Size */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}
