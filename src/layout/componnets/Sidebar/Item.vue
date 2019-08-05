<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    children: {

    }
  },
  render(h, context) {
    const { icon, title, children } = context.props;
    const vnodes = [];
    if (icon) {
      vnodes.push(<svg-icon icon-class={icon}/>);
    } else if(children){
      vnodes.push(<i class='el-icon-menu'/>);
    }
    vnodes.push(<span slot='title'>{(title) || '未命名菜单'}</span>);
    return vnodes;
  }
};
</script>
