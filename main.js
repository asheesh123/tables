function multi(a, d) {
  document.getElementById(d).innerHTML = "";
  for (var b = 1; b <= 20; b++) {
    document.getElementById(d).innerHTML +=
      "<tr><td>" +
      a +
      " X " +
      b +
      "</td> <td> = </td>" +
      "<td>" +
      a * b +
      "</td></tr>";
  }
}

function handleSubmit(e) {
  e.preventDefault();
}

const form = document.getElementById("input-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = document.getElementById("numberInput")?.value;
  if (number) {
    const all = document.getElementById("all");
    if (all) {
      all.style.display = "none";
    }
    const specific = document.getElementById("specific");
    if (specific) {
      specific.style.display = "block";
      multi(number, "specific-demo");
    }
  }
});

multi(1, "demo1");
multi(2, "demo2");
multi(3, "demo3");
multi(4, "demo4");
multi(5, "demo5");
multi(6, "demo6");
multi(7, "demo7");
multi(8, "demo8");
multi(9, "demo9");
multi(10, "demo10");
multi(11, "demo11");
multi(12, "demo12");
multi(13, "demo13");
multi(14, "demo14");
multi(15, "demo15");
multi(16, "demo16");
multi(17, "demo17");
multi(18, "demo18");
multi(19, "demo19");
multi(20, "demo20");
