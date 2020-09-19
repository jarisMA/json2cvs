# Installation
```
npm install @jarisMA/json2csv
```

# Usage examples
引入 ```index.js```:

```javascript
import JSON2CVS from "@jaris/json2csv";

const jsonData = [
  {
    name: '姓名',
    phone: '手机',
    email: '邮箱'
  },
  {
    name: '甲',
    phone: '00000000000',
    email: '000@test.com'
  },
  {
    name: '乙',
    phone: '00000000000',
    email: '000@test.com'
  },
  {
    name: '丙',
    phone: '00000000000',
    email: '000@test.com'
  },
  {
    name: '丁',
    phone: '00000000000',
    email: '000@test.com'
  }
];

const cvs = new JSON2CVS(jsonData); // 初始化数据
cvs.toCVS(); // 导出cvs文件
```
