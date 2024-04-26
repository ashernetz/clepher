export interface NavItemProps {
    title: string;
    link: string;
}
export interface NavItemWithSubMenuProps {
    title: string
    subMenus: NavItemProps[]
}
