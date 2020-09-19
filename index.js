class JSON2CVS {
  constructor(data) {
    this.data = data;
  }

  toCVS (name = 'default') {
    const data = this.data;
    let str = '';
    for (let i = 0; i < data.length; i++) {
      for (let item in data[i]) {
        str += `${data[i][item] + '\t'},`;
      }
      str += '\n';
    }

    // encodeURIComponent解决中文乱码
    const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);

    // 通过创建a标签实现
    const link = document.createElement("a");
    link.href = uri;
    // 对下载的文件命名
    link.download = `${name}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

module.exports = JSON2CVS