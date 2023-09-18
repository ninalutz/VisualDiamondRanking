

      function allowDrop(ev) {
          ev.preventDefault();
      }
 
      function dragStart(ev) {
          ev.dataTransfer.setData("text", ev.target.id);
      }
 
      function dragDrop(ev) {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("text");
          ev.target.appendChild(document.getElementById(data));
      }

      function exportData(){
        console.log("HELLO")
        let cells = document.getElementsByClassName('div1');
        console.log(cells.length)

        let participant = document.getElementById("id").value;

        let row0 = ["box", "imageName"];
        let rows =[];
        rows.push(row0);

        for (var i = 0; i < cells.length; i++) {
          let filename = cells[i].childNodes[1].src.split("/");
          console.log(filename)
          let row = [i+1, filename[filename.length-1]];
          console.log(row)
          rows.push(row);
          }

        let csvContent = "data:text/csv;charset=utf-8,";

        rows.forEach(function(rowArray) {
            let line = rowArray.join(",");
            csvContent += line + "\r\n";
        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", participant+".csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".
    }

    