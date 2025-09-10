import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import type { AppData } from "../app/schemas";
// import { calcularResultados } from "../utils/calculations";

const styles = StyleSheet.create({
  page: { padding: 28 },
  h1: { fontSize: 18, marginBottom: 12 },
  h2: { fontSize: 14, marginTop: 10, marginBottom: 6 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  small: { fontSize: 10, color: "#444" },
});

export function PdfDoc({ data }: { data: AppData }) {
  return (
    <Document>
      <p>{data.general.eventType}</p>
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>Calculadora Carbono Neutral — Resultados</Text>
        <Text style={styles.h2}>Información General</Text>

        <Text style={styles.h2}>Cálculos</Text>

        <Text style={styles.small}>
          * Factores y supuestos pueden ajustarse según metodología.
        </Text>
      </Page>
    </Document>
  );
}
