function metricConverter(numberInput, firstMetric, secondMetric) {
    let number = Number(numberInput);
    let fromMertic = firstMetric;
    let toMetric = secondMetric;
    let convertion = `${fromMertic} + ${toMetric}`;
    
    if(convertion === "m + cm"){
        console.log((number * 100).toFixed(3));
    } else if(convertion === "m + mm"){
        console.log((number * 1000).toFixed(3));
    }else if(convertion === "cm + m"){
        console.log((number /100).toFixed(3));
    }else if(convertion === "cm + mm"){
        console.log((number * 10).toFixed(3));
    }else if(convertion === "mm + m"){
        console.log((number /1000).toFixed(3));
    }else if(convertion === "mm + cm"){
        console.log((number /10).toFixed(3));
    }
};

metricConverter("12", "mm", "m");
