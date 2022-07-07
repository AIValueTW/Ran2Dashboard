## 全名

亂2維運平台 Dashboard

## 資料呈現

請遊戲PM、工程師從每日寄送email文件中標註重點資訊，並從中轉化成BI圖表 <br/>
01.昨日遊戲安全性重要稽核數據 <br/>
02.上週宅配成功交易 <br/>
03.昨日點數稽核 <br/>
04.重要數據極機密 <br/>

## SQL Server <br/>
```
  "Physical_Product_Order": {
      "host": "192.168.10.7",
      "port": 3306,
      "user": "RanReport",
      "pwd": "**********",
      "db": "Physical_Product_Order"
  },
  "feya_admin": {
      "host": "192.168.10.5",
      "port": 3306,
      "user": "RanReport",
      "pwd": "**********",
      "db": "feya_admin"
  },
  "FEYA_CHARGE_RA_Test": {
      "host": "192.168.10.7",
      "port": 3306,
      "user": "RanReport",
      "pwd": "**********",
      "db": "FEYA_CHARGE_RA"
  }
```
## 部署機台 <br/>

使用微軟機台部署之原因為Ubuntu 無法連線2008 SQL Server 故捨棄，TLS版本問題，解決辦法由Boesen提供windows 2019 測試版本進行部署
遠端桌面連線 <br/>
210.64.10.184 <br/>
xtragoofytech <br/>
