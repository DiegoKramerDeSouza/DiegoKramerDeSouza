(function(){
    "use strict";

    $(function () {
        function parseData(data) {
            $("#appendData").empty();
            for(var i=0; i<data.length;i++){
                let content =
                    `<div class="card custom-card">    
                        <a href="/product?id=${data[i].id}">
                          <img class="card-img-top" src="${data[i].picture}" alt="${data[i].name}"/>
                        </a>
                        <div class="card-body text-truncate">
                              <h4 class="card-title">
                                    <a href="/product?id=${data[i].id}" title="${data[i].name}">${data[i].name}</a>
                              </h4>
                              <p><h5>$${data[i].price}</h5></p>
                              <p class="card-text" id="productDesc" title="${data[i].description}">
                                    ${data[i].description}
                              </p>
                        </div>
                        <div class="card-footer">
                            <form action="/API/product" method="post">
                                  <input type="hidden" value="1" name="qtd" />
                                  <input type="hidden" value="${data[i].name}" name="name" />
                                  <input type="hidden" value="${data[i].id}" name="id" />
                                  <input type="hidden" value="${data[i].price}" name="price" />
                                  <input type="hidden" value="${data[i].picture}" name="pic" />
                                  <input type="hidden" value="${data[i].description}" name="desc" />
                                  <input type="hidden" value="${data[i].type}" name="type" />
                                  <input type="submit"  class="btn btn-success" value="Add to Cart" />
                            </form>
                        </div>
                    </div>`;

                let child = document.createElement("div");
                child.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
                child.innerHTML = content;
                $("#appendData").append(child);
            }
        };

        // Listener to Product Types
        Array.prototype.forEach.call($("#theFixed>.list-group-item"), type => {
            type.onclick = () =>{
                $("#loader").fadeIn(300);
                const item = $(type).attr("data-item");
                const param = item == "all" ? {} : {"type": item};
                $.get('/API/product', param, parseData, "json")
                    .always(() => {
                        $("#loader").hide();
                    });
            };
        });

        // Dismiss messages
        setTimeout(() => $("#msg-success").slideUp(300), 1500);
        setTimeout(() => $("#msg-error").slideUp(300), 1500);

        // Initial Products loader
        $.get('/API/product', parseData, "json")
            .always(() => {
                $("#loader").hide();
                $("footer").fadeIn(300);
            });
        $("#loader").fadeIn(300);

    });
})();

