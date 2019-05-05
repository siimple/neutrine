//Neutrine version
export {version} from "./src/version.js";

//Import global styles
import "./src/style.scss";

//Export helpers
export * from "./src/helpers.js";

//Core components
export {Alert, AlertTitle, AlertClose} from "./src/core/components/alert.js";
export {Breadcrumb, BreadcrumbItem} from "./src/core/components/breadcrumb.js";
export {Card, CardHeader, CardBody, CardLink, CardFooter, CardTitle, CardSubtitle} from "./src/core/components/card.js";
export {List, ListItem, ListTitle} from "./src/core/components/list.js";
export {Menu, MenuGroup, MenuItem} from "./src/core/components/menu.js";
export {Table, TableHeader, TableBody, TableRow, TableCell} from "./src/core/components/table.js";
export {Tabs, TabsItem} from "./src/core/components/tabs.js";

//Core elements
export {Btn, BtnGroup} from "./src/core/elements/btn.js";
export {default as Rule} from "./src/core/elements/rule.js";
export {default as Spinner} from "./src/core/elements/spinner.js";
export {default as Tag} from "./src/core/elements/tag.js";
export {default as Tip} from "./src/core/elements/tip.js";

//Core form
export {Checkbox} from "./src/core/form/checkbox.js";
export {Field, FieldLabel, FieldHelper} from "./src/core/form/field.js";
export {Form, FormTitle, FormDetail, FormRule} from "./src/core/form/form.js";
export {Input} from "./src/core/form/input.js";
export {Label} from "./src/core/form/label.js";
export {Radio} from "./src/core/form/radio.js";
export {Select} from "./src/core/form/select.js";
export {Switch} from "./src/core/form/switch.js";
export {Textarea} from "./src/core/form/textarea.js";

//Core grid
export {Grid, GridRow, GridCol} from "./src/core/grid/grid.js";

//Core layout
//export {Box, BoxTitle, BoxSubtitle, BoxDetail} from "./src/core/layout/box.js";
export {default as Content} from "./src/core/layout/content.js";
export {Footer, FooterTitle, FooterSubtitle, FooterParagraph, FooterLink, FooterGroup, FooterRule} from "./src/core/layout/footer.js";
export {Jumbotron, JumbotronTitle, JumbotronSubtitle, JumbotronDetail} from "./src/core/layout/jumbotron.js";
export {Navbar, NavbarTitle, NavbarSubtitle, NavbarItem} from "./src/core/layout/navbar.js";

//Core typography
export {default as Blockquote} from "./src/core/typography/blockquote.js";
export {default as Code} from "./src/core/typography/code.js";
export {default as Heading} from "./src/core/typography/heading.js";
export {default as Link} from "./src/core/typography/link.js";
export {default as Paragraph} from "./src/core/typography/paragraph.js";
export {default as Pre} from "./src/core/typography/pre.js";
export {default as Small} from "./src/core/typography/small.js";

//Core experiments
export {Modal, ModalHeader, ModalBody, ModalFooter} from "./src/core/experiments/modal.js";
export {default as Progress} from "./src/core/experiments/progress.js";

//Icons
export * from "./src/icon/index.js";

//Components
export {default as CookiesConsent} from "./src/components/cookies-consent/index.js";
export {Projects, ProjectsRow, ProjectsColumn, ProjectsInfoColumn} from "./src/components/projects/index.js";
export {Subhead, SubheadText, SubheadBtn} from "./src/components/subhead/index.js";
export {default as Toast} from "./src/components/toast/index.js";

//Future components
export * from "./src/future/group/index.js";
export * from "./src/future/side/index.js";
export * from "./src/future/panel/index.js";

//Loaders
export * from "./src/loaders/dna-loader/index.js";

//Layout components
export * from "./src/layout/dashboard/index.js";
export * from "./src/layout/toolbar/index.js";

//Widgets
export * from "./src/widgets/datatable/index.js";
export * from "./src/widgets/text-editor/index.js";

//Export testing components
export * from "./src/test/index.js";

//Export main components
export * from "./src/global.js";

//Utils
export * from "./src/utils/dom.js";
export * from "./src/utils/if.js";

//TO_BE_DEPRECATED
import * as cookiesUtils from "./src/utils/cookies.js";
import * as domUtils from "./src/utils/dom.js";
import * as reactUtils from "./src/utils/react.js";
export {
    cookiesUtils,
    domUtils,
    reactUtils
};

