<h1>Admin LTE</h1>

<img align="left" src="https://github.com/WireBootstrap/AdminLTE/blob/master/images/adminlte.template.png">
<br/>
<p>
<strong>
Admin LTE for WireBootstrap
</strong>
</p>
<p>
Vendor: <a href="https://adminlte.io" target="_blank">Almsaeed Studio.</a><br/>
Support: <a href="http://www.www.com" target="_blank">WireBootstrap Forums</a><br/>
Demo: <a href="https://adminlte.io/themes/AdminLTE">Admin LTE Template</a><br>
  </p>
  
<hr/>

<p>
Create dashboard pages in WireBootstrap from one of the original Bootstrap theme templates, Admin LTE.  This project includes multiple page layouts, KPIs, and other WireBootstrap widgets specific to Admin LTE. 
</p>
<h1><a id="config">Configuration</a></h1>

```javascript
{
 "schema": {
   "value": "value",
   "color": "color"
 },
 "name": "KPI 1",
 "cssIcon": "fa fa-bar-chart",
 "moreLink": null
}
```
<table>
	<thead>
		<tr>
			<th style="width:100px">Property</th>
			<th style="width:300px">Description</th>
			<th style="width:100px">Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="width:100px">schema</td>
			<td style="width: 300px;">Data source fields mapped to the KPI's data configuration</td>
			<td style="width:100px">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width:100px">name</td>
			<td style="width: 300px;">The name of the KPI displayed on the component</td>
			<td style="width:100px">KPI 1</td>
		</tr>
		<tr>
			<td style="width:100px">cssIcon
				<br>
			</td>
			<td style="width: 300px;">CSS class name for KPI Icon</td>
			<td style="width:100px"><a href="https://fontawesome.com/v4.7.0/icon/bar-chart" target="_blank">fa fa-bar-chart</a>
				<br>
			</td>
		</tr>
		<tr>
			<td style="width:100px">moreLink</td>
			<td style="width: 300px;">URL when clicking the 'More info' link</td>
			<td style="width:100px">
				<br>
			</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>

<h2>Data Binding (schema)</h2>

<p>
	<br>
</p>

<table>
	<thead>
		<tr>
			<th style="width:100px">Property</th>
			<th style="width:300px">Description</th>
			<th style="width:100px">Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="width:100px">value</td>
			<td style="width:300px">Field used for the value on the KPI</td>
			<td style="width:100px">value</td>
		</tr>
		<tr>
			<td style="width:100px">color</td>
			<td style="width:300px">Field that holds the CSS class name for the KPI color</td>
			<td style="width:100px">color</td>
		</tr>
	</tbody>
</table>
