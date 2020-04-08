(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(module,exports,__webpack_require__){module.exports={indicator:"DashboardIndicator_indicator__-3gJv colors_dimSvgElement__1Gaiw",value:"DashboardIndicator_value__2Cny_ colors_highlightSvgElement__261PQ"}},278:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63);__webpack_require__.n(_storybook_addons__WEBPACK_IMPORTED_MODULE_0__).a.getChannel().on("DARK_MODE",(function(isDark){isDark?document.body.classList.add("dark"):document.body.classList.remove("dark")}))},281:function(module,exports,__webpack_require__){__webpack_require__(282),__webpack_require__(428),module.exports=__webpack_require__(429)},346:function(module,exports){},429:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(279);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(610)],module)}.call(this,__webpack_require__(430)(module))},54:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(1),react_default=__webpack_require__.n(react),quantities=__webpack_require__(280),quantities_default=__webpack_require__.n(quantities),DashboardValue_module=__webpack_require__(70),DashboardValue_module_default=__webpack_require__.n(DashboardValue_module),DashboardIndicator_module=__webpack_require__(174),DashboardIndicator_module_default=__webpack_require__.n(DashboardIndicator_module);function DashboardIndicator(props){var radius=props.radius,value=props.value,maxValue=props.maxValue,circumference=2*Math.PI*radius,meterPosition=value/maxValue*.8;return meterPosition>.8&&(meterPosition=.8),react_default.a.createElement("svg",{width:2*radius+10,height:2*radius+10},react_default.a.createElement("circle",{className:DashboardIndicator_module_default.a.indicator,cx:radius+5,cy:radius+5,r:radius,stroke:"#e0e0e0",strokeWidth:10,strokeDasharray:circumference,strokeDashoffset:circumference-.8*circumference,transform:"rotate(125 ".concat(radius+5," ").concat(radius+5,")"),fill:"transparent"}),react_default.a.createElement("circle",{className:DashboardIndicator_module_default.a.value,cx:radius+5,cy:radius+5,r:radius,stroke:"blue",strokeWidth:10,strokeDasharray:circumference,strokeDashoffset:circumference-meterPosition*circumference,transform:"rotate(125 ".concat(radius+5," ").concat(radius+5,")"),fill:"transparent"}))}DashboardIndicator.defaultProps={radius:100},DashboardIndicator.__docgenInfo={description:"",methods:[],displayName:"DashboardIndicator",props:{radius:{defaultValue:{value:"100",computed:!1},required:!1}}};var components_DashboardIndicator=DashboardIndicator;function DashboardValue(props){var meter,label=props.label,value=props.value,maxValue=props.maxValue,desiredUnit=props.desiredUnit,displayValue=value;"number"==typeof displayValue?props.unit&&desiredUnit&&(displayValue=quantities_default()(value,props.unit).to(props.desiredUnit).toPrec("0.1 ".concat(desiredUnit)).scalar):displayValue="n/a";return"temp-C"===desiredUnit&&(desiredUnit="°C"),"number"==typeof maxValue&&(meter=react_default.a.createElement("aside",{className:DashboardValue_module_default.a.meter},react_default.a.createElement(components_DashboardIndicator,{value:value,maxValue:maxValue,radius:70}))),react_default.a.createElement("div",{className:DashboardValue_module_default.a.card},react_default.a.createElement("h1",{className:DashboardValue_module_default.a.label},label),meter,react_default.a.createElement("p",{className:DashboardValue_module_default.a.value},displayValue),react_default.a.createElement("h2",{className:DashboardValue_module_default.a.unit},desiredUnit))}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DashboardIndicator.jsx"]={name:"DashboardIndicator",docgenInfo:DashboardIndicator.__docgenInfo,path:"src/components/DashboardIndicator.jsx"}),DashboardValue.defaultProps={value:null,maxValue:null},DashboardValue.__docgenInfo={description:"",methods:[],displayName:"DashboardValue",props:{value:{defaultValue:{value:"null",computed:!1},required:!1},maxValue:{defaultValue:{value:"null",computed:!1},required:!1}}};__webpack_exports__.a=DashboardValue;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DashboardValue.jsx"]={name:"DashboardValue",docgenInfo:DashboardValue.__docgenInfo,path:"src/components/DashboardValue.jsx"})},55:function(module,exports,__webpack_require__){module.exports={container:"WindDisplay_container__2v8Gq colors_container__2jP9v",windSpeed:"WindDisplay_windSpeed__1jPKk",vessel:"WindDisplay_vessel__1ijeQ colors_filledSvgElement__3M8Yz",compassCircle:"WindDisplay_compassCircle__16Fzl colors_svgElement__2JoRh",compassPoint:"WindDisplay_compassPoint__1QX8S typography_display__2Ats9 colors_text__2Gm2_",currentBearingContainer:"WindDisplay_currentBearingContainer__2skBv colors_filledSvgElement__3M8Yz",currentBearing:"WindDisplay_currentBearing__2ixLy typography_body__1uOdS colors_text__2Gm2_"}},610:function(module,exports,__webpack_require__){var map={"./components/DashboardValue.stories.jsx":611,"./components/WindDisplay.stories.jsx":621};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=610},611:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"withMaxValue",(function(){return withMaxValue})),__webpack_require__.d(__webpack_exports__,"WithoutValue",(function(){return WithoutValue})),__webpack_require__.d(__webpack_exports__,"maxWithoutValue",(function(){return maxWithoutValue}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_DashboardValue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(54);__webpack_require__(278);__webpack_exports__.default={title:"Dashboard value",component:_DashboardValue__WEBPACK_IMPORTED_MODULE_2__.a,decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs]};var unitOptions=[{label:"SOG",unit:"m/s",desiredUnit:"kt"},{label:"Temp",unit:"temp-K",desiredUnit:"temp-C"},{label:"Baro",unit:"Pa",desiredUnit:"hPa"}],Basic=function Basic(){var units=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Unit",unitOptions,unitOptions[0]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardValue__WEBPACK_IMPORTED_MODULE_2__.a,{label:units.label,value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Value",3.3),unit:units.unit,desiredUnit:units.desiredUnit})},withMaxValue=function withMaxValue(){var units=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Unit",unitOptions,unitOptions[0]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardValue__WEBPACK_IMPORTED_MODULE_2__.a,{label:units.label,value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Value",3.3),maxValue:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("Max value",6),unit:units.unit,desiredUnit:units.desiredUnit})},WithoutValue=function WithoutValue(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardValue__WEBPACK_IMPORTED_MODULE_2__.a,{label:"SOG",unit:"m/s",desiredUnit:"kt"})},maxWithoutValue=function maxWithoutValue(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardValue__WEBPACK_IMPORTED_MODULE_2__.a,{label:"SOG",maxValue:6,unit:"m/s",desiredUnit:"kt"})};Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DashboardValue.stories.jsx"]={name:"Basic",docgenInfo:Basic.__docgenInfo,path:"src/components/DashboardValue.stories.jsx"}),withMaxValue.__docgenInfo={description:"",methods:[],displayName:"withMaxValue"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DashboardValue.stories.jsx"]={name:"withMaxValue",docgenInfo:withMaxValue.__docgenInfo,path:"src/components/DashboardValue.stories.jsx"}),WithoutValue.__docgenInfo={description:"",methods:[],displayName:"WithoutValue"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DashboardValue.stories.jsx"]={name:"WithoutValue",docgenInfo:WithoutValue.__docgenInfo,path:"src/components/DashboardValue.stories.jsx"}),maxWithoutValue.__docgenInfo={description:"",methods:[],displayName:"maxWithoutValue"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DashboardValue.stories.jsx"]={name:"maxWithoutValue",docgenInfo:maxWithoutValue.__docgenInfo,path:"src/components/DashboardValue.stories.jsx"})},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WithoutValues",(function(){return WindDisplay_stories_WithoutValues})),__webpack_require__.d(__webpack_exports__,"WithApparentWind",(function(){return WindDisplay_stories_WithApparentWind})),__webpack_require__.d(__webpack_exports__,"WithApparentWindAndSpeed",(function(){return WindDisplay_stories_WithApparentWindAndSpeed})),__webpack_require__.d(__webpack_exports__,"WithApparentWindAndSpeedAndWaypoint",(function(){return WindDisplay_stories_WithApparentWindAndSpeedAndWaypoint})),__webpack_require__.d(__webpack_exports__,"WithOnlyWaypoint",(function(){return WindDisplay_stories_WithOnlyWaypoint})),__webpack_require__.d(__webpack_exports__,"WithWindNotSailing",(function(){return WindDisplay_stories_WithWindNotSailing})),__webpack_require__.d(__webpack_exports__,"WithWindAndWaypointNotSailing",(function(){return WindDisplay_stories_WithWindAndWaypointNotSailing}));var react=__webpack_require__(1),react_default=__webpack_require__.n(react),dist=__webpack_require__(3);function WindDisplayAreas(props){var apparentWind=props.apparentWind,beatAngle=props.beatAngle,gybeAngle=props.gybeAngle,radius=props.radius,getCoordinatesForDegrees=function getCoordinatesForDegrees(degrees){var angle=2*Math.PI*(degrees/360);return[radius+10+Math.cos(angle)*radius,radius+14+Math.sin(angle)*radius]},windRotation=-91+apparentWind,beatRotation=-90-beatAngle+apparentWind,gybeRotation=-90-gybeAngle+apparentWind+180;return react_default.a.createElement("g",null,react_default.a.createElement("path",{d:"\n          M ".concat(radius+10," ").concat(radius+14,"\n          L ").concat(radius+10+radius," ").concat(radius+14,"\n          A ").concat(radius," ").concat(radius," 0 0 1 ").concat(getCoordinatesForDegrees(2*beatAngle)[0]," ").concat(getCoordinatesForDegrees(2*beatAngle)[1],"\n          Z\n        "),stroke:"red",strokeWidth:0,fill:"red",fillOpacity:.4,transform:"rotate(".concat(beatRotation," ").concat(radius+10," ").concat(radius+14,")")}),react_default.a.createElement("path",{d:"\n          M ".concat(radius+10," ").concat(radius+14,"\n          L ").concat(radius+10+radius," ").concat(radius+14,"\n          A ").concat(radius," ").concat(radius," 0 0 1 ").concat(getCoordinatesForDegrees(2*gybeAngle)[0]," ").concat(getCoordinatesForDegrees(2*gybeAngle)[1],"\n          Z\n        "),stroke:"red",strokeWidth:0,fill:"red",fillOpacity:.2,transform:"rotate(".concat(gybeRotation," ").concat(radius+10," ").concat(radius+14,")")}),react_default.a.createElement("path",{d:"\n          M ".concat(radius+10," ").concat(radius+14,"\n          L ").concat(radius+10+radius," ").concat(radius+14,"\n          A ").concat(radius," ").concat(radius," 0 0 1 ").concat(getCoordinatesForDegrees(2)[0]," ").concat(getCoordinatesForDegrees(2)[1],"\n          Z\n        "),stroke:"red",strokeWidth:0,fill:"red",fillOpacity:.4,transform:"rotate(".concat(windRotation," ").concat(radius+10," ").concat(radius+14,")")}))}WindDisplayAreas.defaultProps={beatAngle:42,gybeAngle:27},WindDisplayAreas.__docgenInfo={description:"",methods:[],displayName:"WindDisplayAreas",props:{beatAngle:{defaultValue:{value:"42",computed:!1},required:!1},gybeAngle:{defaultValue:{value:"27",computed:!1},required:!1}}};var components_WindDisplayAreas=WindDisplayAreas;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplayAreas.jsx"]={name:"WindDisplayAreas",docgenInfo:WindDisplayAreas.__docgenInfo,path:"src/components/WindDisplayAreas.jsx"});var DashboardValue=__webpack_require__(54),WindDisplay_module=__webpack_require__(55),WindDisplay_module_default=__webpack_require__.n(WindDisplay_module),compassPoints=["N","NE","E","SE","S","SW","W","NW"];function WindDisplay(props){var bearing=props.bearing,apparentWind=props.apparentWind,nextWaypoint=props.nextWaypoint,windSpeed=props.windSpeed,beatAngle=props.beatAngle,gybeAngle=props.gybeAngle,rotation=90+bearing,waypointRotation=-90+nextWaypoint-bearing,currentOffset=0,windAreas=null;"number"==typeof apparentWind&&(windAreas=react_default.a.createElement(components_WindDisplayAreas,{apparentWind:apparentWind,radius:300,beatAngle:beatAngle,gybeAngle:gybeAngle}));var waypoint=null;return"number"==typeof nextWaypoint&&(waypoint=react_default.a.createElement("polyline",{points:"".concat(620,", ").concat(310," ").concat(614,", ").concat(300," ").concat(614,", ").concat(321),fill:"#FF4F00",stroke:"#FF4F00",transform:"rotate(".concat(waypointRotation," ").concat(310," ").concat(314,")")})),react_default.a.createElement("div",{className:WindDisplay_module_default.a.container},react_default.a.createElement("svg",{width:620,height:620},react_default.a.createElement("circle",{id:"compassCircle",cx:310,cy:314,r:300,stroke:"black",strokeWidth:4,fill:"#044B94",fillOpacity:.2,transform:"rotate(-".concat(rotation," ").concat(310," ").concat(314,")"),className:WindDisplay_module_default.a.compassCircle}),windAreas,react_default.a.createElement("path",{d:" M 310 75 C 410,350 420,350 360,500 L 260 500 C 210,350 190,400 310,75 ",stroke:"white",fill:"white",className:WindDisplay_module_default.a.vessel}),compassPoints.map((function(point){var offset="".concat(Math.floor(currentOffset),"%");return currentOffset+=12.5,react_default.a.createElement("text",{key:point,x:0,y:15,stroke:"black",textAnchor:"middle"},react_default.a.createElement("textPath",{xlinkHref:"#compassCircle",startOffset:offset,className:WindDisplay_module_default.a.compassPoint},point))})),waypoint,react_default.a.createElement("rect",{width:80,height:30,x:270,y:14,rx:2,fill:"white",stroke:"black",strokeWidth:4,className:WindDisplay_module_default.a.currentBearingContainer}),react_default.a.createElement("text",{x:310,y:38,stroke:"black",textAnchor:"middle",className:WindDisplay_module_default.a.currentBearing},"".concat(bearing).padStart(3,0),"°")),react_default.a.createElement("div",{className:WindDisplay_module_default.a.windSpeed},react_default.a.createElement(DashboardValue.a,{label:"Wind",value:windSpeed,unit:"m/s",desiredUnit:"kt"})))}WindDisplay.defaultProps={apparentWind:null,nextWaypoint:null,windSpeed:null,beatAngle:42,gybeAngle:27},WindDisplay.__docgenInfo={description:"",methods:[],displayName:"WindDisplay",props:{apparentWind:{defaultValue:{value:"null",computed:!1},required:!1},nextWaypoint:{defaultValue:{value:"null",computed:!1},required:!1},windSpeed:{defaultValue:{value:"null",computed:!1},required:!1},beatAngle:{defaultValue:{value:"42",computed:!1},required:!1},gybeAngle:{defaultValue:{value:"27",computed:!1},required:!1}}};var components_WindDisplay=WindDisplay;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplay.jsx"]={name:"WindDisplay",docgenInfo:WindDisplay.__docgenInfo,path:"src/components/WindDisplay.jsx"});__webpack_require__(278),__webpack_exports__.default={title:"Wind Display",component:components_WindDisplay,decorators:[dist.withKnobs]};var WindDisplay_stories_WithoutValues=function WithoutValues(){return react_default.a.createElement(components_WindDisplay,{bearing:Object(dist.number)("Bearing",45)})},WindDisplay_stories_WithApparentWind=function WithApparentWind(){return react_default.a.createElement(components_WindDisplay,{bearing:Object(dist.number)("Bearing",45),apparentWind:Object(dist.number)("Apparent wind angle",70)})},WindDisplay_stories_WithApparentWindAndSpeed=function WithApparentWindAndSpeed(){return react_default.a.createElement(components_WindDisplay,{bearing:Object(dist.number)("Bearing",45),apparentWind:Object(dist.number)("Apparent wind angle",70),windSpeed:Object(dist.number)("Wind speed",7)})},WindDisplay_stories_WithApparentWindAndSpeedAndWaypoint=function WithApparentWindAndSpeedAndWaypoint(){return react_default.a.createElement(components_WindDisplay,{bearing:Object(dist.number)("Bearing",45),apparentWind:Object(dist.number)("Apparent wind angle",45),windSpeed:Object(dist.number)("Wind speed",7),nextWaypoint:Object(dist.number)("Next waypoint",85)})},WindDisplay_stories_WithOnlyWaypoint=function WithOnlyWaypoint(){return react_default.a.createElement(components_WindDisplay,{bearing:Object(dist.number)("Bearing",45),nextWaypoint:Object(dist.number)("Next waypoint",270)})},WindDisplay_stories_WithWindNotSailing=function WithWindNotSailing(){return react_default.a.createElement(components_WindDisplay,{bearing:Object(dist.number)("Bearing",45),apparentWind:Object(dist.number)("Apparent wind angle",0),windSpeed:Object(dist.number)("Wind speed",3),beatAngle:0,gybeAngle:0})},WindDisplay_stories_WithWindAndWaypointNotSailing=function WithWindAndWaypointNotSailing(){return react_default.a.createElement(components_WindDisplay,{bearing:Object(dist.number)("Bearing",45),nextWaypoint:Object(dist.number)("Next waypoint",270),apparentWind:Object(dist.number)("Apparent wind angle",0),windSpeed:Object(dist.number)("Wind speed",3),beatAngle:0,gybeAngle:0})};WindDisplay_stories_WithoutValues.__docgenInfo={description:"",methods:[],displayName:"WithoutValues"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplay.stories.jsx"]={name:"WithoutValues",docgenInfo:WindDisplay_stories_WithoutValues.__docgenInfo,path:"src/components/WindDisplay.stories.jsx"}),WindDisplay_stories_WithApparentWind.__docgenInfo={description:"",methods:[],displayName:"WithApparentWind"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplay.stories.jsx"]={name:"WithApparentWind",docgenInfo:WindDisplay_stories_WithApparentWind.__docgenInfo,path:"src/components/WindDisplay.stories.jsx"}),WindDisplay_stories_WithApparentWindAndSpeed.__docgenInfo={description:"",methods:[],displayName:"WithApparentWindAndSpeed"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplay.stories.jsx"]={name:"WithApparentWindAndSpeed",docgenInfo:WindDisplay_stories_WithApparentWindAndSpeed.__docgenInfo,path:"src/components/WindDisplay.stories.jsx"}),WindDisplay_stories_WithApparentWindAndSpeedAndWaypoint.__docgenInfo={description:"",methods:[],displayName:"WithApparentWindAndSpeedAndWaypoint"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplay.stories.jsx"]={name:"WithApparentWindAndSpeedAndWaypoint",docgenInfo:WindDisplay_stories_WithApparentWindAndSpeedAndWaypoint.__docgenInfo,path:"src/components/WindDisplay.stories.jsx"}),WindDisplay_stories_WithOnlyWaypoint.__docgenInfo={description:"",methods:[],displayName:"WithOnlyWaypoint"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplay.stories.jsx"]={name:"WithOnlyWaypoint",docgenInfo:WindDisplay_stories_WithOnlyWaypoint.__docgenInfo,path:"src/components/WindDisplay.stories.jsx"}),WindDisplay_stories_WithWindNotSailing.__docgenInfo={description:"",methods:[],displayName:"WithWindNotSailing"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplay.stories.jsx"]={name:"WithWindNotSailing",docgenInfo:WindDisplay_stories_WithWindNotSailing.__docgenInfo,path:"src/components/WindDisplay.stories.jsx"}),WindDisplay_stories_WithWindAndWaypointNotSailing.__docgenInfo={description:"",methods:[],displayName:"WithWindAndWaypointNotSailing"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WindDisplay.stories.jsx"]={name:"WithWindAndWaypointNotSailing",docgenInfo:WindDisplay_stories_WithWindAndWaypointNotSailing.__docgenInfo,path:"src/components/WindDisplay.stories.jsx"})},70:function(module,exports,__webpack_require__){module.exports={card:"DashboardValue_card__1mn9c colors_container__2jP9v",label:"DashboardValue_label__1896J typography_display__2Ats9",value:"DashboardValue_value__13yav typography_body__1uOdS",unit:"DashboardValue_unit__26iMj typography_display__2Ats9",meter:"DashboardValue_meter__kkUHI"}}},[[281,1,2]]]);
//# sourceMappingURL=main.b8b2d85b5b61cd6fecb5.bundle.js.map