(() => {
  "use strict";
  const e = ({ tag: e, className: t, innerText: n }) => {
      const a = document.createElement(e);
      return t && (a.className = t), n && (a.innerText = n), a;
    },
    t = document.getElementById("commentInput"),
    n = document.getElementById("inputForm"),
    a = document.getElementById("commentsList");
  window.addEventListener("load", () => {
    n instanceof HTMLFormElement &&
      t instanceof HTMLInputElement &&
      n.addEventListener("submit", (s) => {
        s.preventDefault();
        const m = t.value;
        m &&
          a &&
          (a.append(
            ((t, n, a) => {
              const s = e({ tag: "li", className: "comment" }),
                m = e({ tag: "img", className: "profilePicture" });
              m instanceof HTMLImageElement &&
                ((m.src = t), (m.alt = "profile Picture"));
              const c = e({ tag: "div", className: "comonComment" }),
                i = ((t, n) => {
                  const a = e({ tag: "h4", className: "commentHeader" }),
                    s = document.createElement("div"),
                    m = e({
                      tag: "span",
                      className: "commentContent",
                      innerText: n,
                    }),
                    c = e({ tag: "b", innerText: `${t}` });
                  return s.append(c, m), a.append(s), a;
                })(n, a),
                { commentInfoElement: o, likesCount: r } = (() => {
                  const t = e({ tag: "div", className: "commentInfo" }),
                    n = e({
                      tag: "div",
                      className: "infoSubtitle",
                      innerText: "0 m",
                    }),
                    a = e({
                      tag: "div",
                      className: "infoSubtitle",
                      innerText: "like",
                    }),
                    s = e({
                      tag: "div",
                      className: "infoSubtitle",
                      innerText: "Reply",
                    });
                  return (
                    t.append(n, a, s), { commentInfoElement: t, likesCount: a }
                  );
                })(),
                l = ((t) => {
                  const n = e({ tag: "img", className: "commentHeart" });
                  return (
                    n instanceof HTMLImageElement &&
                      ((n.src = "../public/assets/heart.svg"),
                      (n.alt = "heart"),
                      n.addEventListener("click", () => {
                        ((e, t) => {
                          "like" === e.innerText
                            ? ((e.innerText = "1 like"),
                              (t.src = "../public/assets/red-heart.svg"))
                            : ((e.innerText = "like"),
                              (t.src = "/assets/heart.svg"));
                        })(t, n);
                      })),
                    n
                  );
                })(r);
              return i.append(o), c.append(m, i), s.append(c, l), s;
            })(
              "https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg",
              "tonytoscani",
              m
            )
          ),
          n.reset());
      });
  });
})();
