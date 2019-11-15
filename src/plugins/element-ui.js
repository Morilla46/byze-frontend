import Vue from 'vue'

// 按需加载
import {
  Button,
  ButtonGroup,
  Message,
  Notification,
  Tooltip,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Carousel,
  Collapse,
  CarouselItem,
  CollapseItem,
  Form,
  FormItem,
  Input,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Progress,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Checkbox,
  Tree,
  Select,
  Switch,
  Option,
  Loading,
  Popover,
  DatePicker,
  Tabs,
  TabPane,
  Radio,
  RadioGroup,
  RadioButton,
  MessageBox,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  timeSelect,
  Rate,
  InputNumber,
  Tag,
  Backtop
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'medium' }

Vue.use(Tag)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Tooltip)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Progress)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Pagination)
Vue.use(Checkbox)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Option)
Vue.use(Popover)
Vue.use(DatePicker)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(timeSelect)
Vue.use(Rate)
Vue.use(InputNumber)
Vue.use(Loading.directive)
Vue.use(Backtop)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
