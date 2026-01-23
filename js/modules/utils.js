(function() {
  window.App = window.App || {};
  window.App.utils = {};

  window.App.utils.formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2
  });

  window.App.utils.numberFormatter = new Intl.NumberFormat("pt-BR");

  window.App.utils.normalizeText = function(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  window.App.utils.decodeBuffer = function(buffer) {
    const utf8 = new TextDecoder("utf-8").decode(buffer);
    if (utf8.includes("\uFFFD")) {
      return new TextDecoder("iso-8859-1").decode(buffer);
    }
    return utf8;
  };

  window.App.utils.parseCurrency = function(value) {
    if (!value) return 0;
    const cleaned = value.replace(/\./g, "").replace(/,/g, ".");
    const parsed = Number.parseFloat(cleaned);
    return Number.isNaN(parsed) ? 0 : parsed;
  };
})();