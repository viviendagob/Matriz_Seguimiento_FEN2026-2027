// Configuración del dashboard FEN. Editar solo este archivo.
window.FEN_CONFIG = {
  // URL /exec del Web App de Apps Script (ver apps-script/Code.gs). Vacío = usar data.json local.
  API_URL: "https://script.google.com/a/macros/vivienda.gob.pe/s/AKfycby8CZbHxEHPb7bDgqeURb0rk3v1s-BvN3ycHNnt-Apc9zj3t_xBXWV4H7bwGXkcq7De/exec",
  // Token que imprime configurarToken() en Apps Script (ver nota de seguridad en Code.gs).
  API_TOKEN: "b40602fb0688425f9bf3eb856e106156",
  // Respaldo / modo demo: JSON generado con tools/xlsx_to_json.py
  DATA_URL: "data.json",
  // Actualización automática (minutos) cuando se usa la API. 0 = solo manual.
  REFRESH_MIN: 5
};
