# node-report
a simple node service to generate excel sheet

# usage
```
npm install
node app.js / forever start app.js
```

# Test
```
curl -H "Content-Type:application/json" -X POST 
--data '{"fileName":"test","data":[["name","age"],["Jack",13]]}' 
http://localhost:3000/createExcel
```

# Demo
```
http://report.graysheep.me/createExcel
```
post data to this service,get excel from http://report.graysheep.me/xxx.xlsx
