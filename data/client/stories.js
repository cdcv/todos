/**
 * Created by cdecharms on 11/15/17.
 */

var data = { "columns": [{ "name": "name" }, { "name": "content" }, { "name": "location" }, { "name": "media" }, { "name": "delayBefore" }],
        "records":
            [
                ['Tiffany', 'OMG this is the first text in the story!','L','',0],
                ['Tiffany', 'OMG this is the first text in the story!','L'],
                ['Tiffany', 'OMG this is the first text in the story!','L'],
                ['Tiffany', 'OMG this is the first text in the story!','L','',0],
            ]
    },
    transformedData = data.records.map(function (a) {
        var o = {};
        a.forEach(function (b, i) {
            o[data.columns[i].name] = b;
        });
        return o;
    });

console.log(transformedData);

story1 = [
    {
        "Name": "Tiffany",
        "Content": "Bunu duyuyor musun?",
        "Location": "R"
    },
    {
        "Name": "anne",
        "Content": "Ne duydun?",
        "Location": "L"
    },
    {
        "Name": "Tiffany",
        "Content": "ağlayan bir bebek var",
        "Location": "R"
    },
    {
        "Name": "anne",
        "Content": "Evde değilim",
        "Location": "L"
    },
    {
        "Name": "anne",
        "Content": "Ben dönene kadar bekleyin",
        "Location": "L"
    },
    {
        "Name": "Tiffany",
        "Content": "Bu bodrumdan geliyor",
        "Location": "R"
    },
    {
        "Name": "anne",
        "Content": "Orada Tiff aşağı gitme",
        "Location": "L"
    },
    {
        "Name": "Tiffany",
        "Content": "Ne? Neden olmasın?",
        "Location": "R"
    },
    {
        "Name": "anne",
        "Content": "babanla ilgili bir şey var sana söylemedim",
        "Location": "L"
    },
    {
        "Name": "Tiffany",
        "Content": "Anne, bir bebek. duyabiliyorum",
        "Location": "R"
    },
    {
        "Name": "anne",
        "Content": "Eve dönene kadar Bal, lütfen dikkate almayın.",
        "Location": "L"
    },
    {
        "Name": "Tiffany",
        "Content": "Bunu nasıl yapacağım?",
        "Location": "R"
    },
    {
        "Name": "Tiffany",
        "Content": "Bu yüksek sesle oluyor ...",
        "Location": "R"
    }
];


