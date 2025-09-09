import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { AppData } from "../app/schemas";
import { calcularResultados } from "../app/schemas";

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
  const r = calcularResultados(data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>Calculadora Carbono Neutral — Resultados</Text>

        <Text style={styles.h2}>Información General</Text>

        <Text style={styles.h2}>Cálculos</Text>
        <KV k="Transporte (kg CO₂e)" v={r.tKg.toFixed(2)} />

        <Text style={styles.small}>
          * Factores y supuestos pueden ajustarse según metodología.
        </Text>
      </Page>
    </Document>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <View style={styles.row}>
      <Text>{k}</Text>
      <Text>{v}</Text>
    </View>
  );
}
