function multi(a, d) {
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
