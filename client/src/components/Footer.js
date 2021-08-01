export default function Footer() {
  let d = new Date();

  return (
    <div className="card card-landing fixed-bottom mx-5 mb-3">
      <div
        className="card-body text-secondary py-1 text-center"
        style={{ fontSize: "14px" }}
      >
        jedeye &copy; Copyright {d.getFullYear()}
      </div>
    </div>
  );
}
