import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

// Dummy data for preview
// const PREVIEW_DATA = {
//   budgetAlert: {
//     userName: "John Doe",
//     type: "budget-alert",
//     data: {
//       percentageUsed: 85,
//       budgetAmount: 4000,
//       totalExpenses: 3400,
//     },
//   },
// };

export default function EmailTemplate({
  // userName = "Bhavish",
  // type = "budget-alert",
  // data = {
  //   percentageUsed: 95,
  //   budgetAmount: 5000,
  //   totalExpenses: 3750,
  // },
  userName = "",
  type = "monthly-report",
  data = {},
}) {
  if (type === "monthly-report") {
    const styles=monthlyReportStyles
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            <Heading style={styles.title}>Monthly Financial Report</Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here&rsquo;s your financial summary for {data?.month}:
            </Text>

            {/* Main Stats */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Income</Text>
                <Text style={styles.heading}>${data?.stats.totalIncome}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Expenses</Text>
                <Text style={styles.heading}>${data?.stats.totalExpenses}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Net</Text>
                <Text style={styles.heading}>
                  ${data?.stats.totalIncome - data?.stats.totalExpenses}
                </Text>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Expenses by Category</Heading>
                {Object.entries(data?.stats.byCategory).map(
                  ([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.text}>{category}</Text>
                      <Text style={styles.text}>${amount}</Text>
                    </div>
                  )
                )}
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>PocketTrack Insights</Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using PocketTrack. Keep tracking your finances for better
              financial health!
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }
 
  if (type === "budget-alert") {
    const styles=budgetAlertStyles;
    // Determine the color of the progress bar based on percentage
    let progressBarColor = "#4ADE80"; // green-500
    if (data?.percentageUsed > 75) {
      progressBarColor = "#FACC15"; // yellow-500
    }
    if (data?.percentageUsed >= 90) {
      progressBarColor = "#EF4444"; // red-500
    }

    return (
      <Html>
        <Head />
        <Preview>Budget Alert: You're close to your limit!</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            {/* Header Section */}
            <Section style={styles.header}>
              <Heading style={styles.headerTitle}>Budget Alert</Heading>
              <Text style={styles.subtext}>You're almost there! </Text>
            </Section>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              This is a heads-up that you've used
              <span style={styles.highlightText}>
                {" "}
                {data?.percentageUsed.toFixed(1)}%{" "}
              </span>
              of your monthly budget.
            </Text>

            {/* Progress Bar Section */}
            <Section style={styles.progressBarSection}>
              <div style={styles.progressBarWrapper}>
                <div
                  style={{
                    ...styles.progressBar,
                    width: `${data?.percentageUsed}%`,
                    backgroundColor: progressBarColor,
                  }}
                />
              </div>
            </Section>

            {/* Financial Stats Section */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Budget Amount</Text>
                <Text style={styles.statValue}>
                  ${data?.budgetAmount}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Spent So Far</Text>
                <Text style={styles.statValue}>
                  ${data?.totalExpenses}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Remaining</Text>
                <Text style={styles.statValue}>
                  ${(data?.budgetAmount - data?.totalExpenses).toFixed(2)}
                </Text>
              </div>
            </Section>

            <Text style={styles.footerText}>
              Keep up the great work. Tracking your finances helps you achieve
              your goals.
            </Text>
            <Text style={styles.footerLink}>welth.com</Text>
          </Container>
        </Body>
      </Html>
    );
  }
}

const baseStyles = {
  body: {
    backgroundColor: "#f7f9fc",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif",
    padding: "20px",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e5e7eb",
    maxWidth: "580px",
  },
  text: {
    color: "#374151",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "0 0 16px",
  },
  highlightText: {
    fontWeight: "700",
    color: "#2563EB",
  },
  footerText: {
    color: "#6B7280",
    fontSize: "13px",
    textAlign: "center",
    marginTop: "28px",
  },
  footerLink: {
    color: "#2563EB",
    fontSize: "13px",
    textAlign: "center",
    marginTop: "4px",
    fontWeight: "600",
  },
  link: {
    color: "#2563EB",
    textDecoration: "none",
    fontWeight: "600",
  },
};

/* =====================
   🎨 Monthly Report Styles
===================== */
const monthlyReportStyles = {
  ...baseStyles,
  header: {
    background: "linear-gradient(135deg, #2563EB, #1E40AF)",
    color: "#ffffff",
    textAlign: "center",
    padding: "32px 20px",
    borderRadius: "12px 12px 0 0",
    margin: "-30px -30px 20px -30px", // makes header span full width of card
  },
  headerTitle: {
    margin: "0",
    fontSize: "26px",
    fontWeight: "800",
    letterSpacing: "0.5px",
  },
  subtext: {
    fontSize: "15px",
    marginTop: "6px",
    color: "#DBEAFE",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#fafafa",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    margin: "24px 0",
  },
  statCard: {
    flex: 1,
    textAlign: "center",
    margin: "0 6px",
  },
  statLabel: {
    fontSize: "13px",
    color: "#6B7280",
    marginBottom: "4px",
  },
  statValue: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111827",
  },
};

/* =====================
   🚨 Budget Alert Styles
===================== */
const budgetAlertStyles = {
  ...baseStyles,
  header: {
    textAlign: "center",
    marginBottom: "24px",
  },
  headerTitle: {
    fontSize: "30px",
    fontWeight: "800",
    color: "#DC2626", // red for urgency
    marginBottom: "4px",
  },
  subtext: {
    fontSize: "14px",
    color: "#6B7280",
  },
  statsContainer: {
    margin: "28px 0",
    padding: "20px",
    backgroundColor: "#fef2f2", // light red background
    borderRadius: "8px",
    border: "1px solid #fecaca",
  },
  stat: {
    marginBottom: "16px",
    padding: "14px",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
  },
  statLabel: {
    fontSize: "13px",
    color: "#6B7280",
    margin: "0 0 4px",
  },
  statValue: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1F2937",
    margin: "0",
  },
};
