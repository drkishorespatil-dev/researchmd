"""Figures for the observational cohort teaching manuscript.

Palette: dataviz categorical slots 1 (blue) and 2 (orange), validated for CVD
separation before use. Colour follows the cohort throughout figures 4-5; the
balance plot uses a neutral/blue pair plus marker shape so it does not borrow
cohort identity.
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
from matplotlib.transforms import blended_transform_factory

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "figures")
os.makedirs(OUT, exist_ok=True)

# ---- design tokens -------------------------------------------------------
F_COL = "#2a78d6"   # categorical slot 1 - fractionated
B_COL = "#eb6834"   # categorical slot 2 - bolus
INK   = "#0b0b0b"   # text primary
INK2  = "#52514e"   # text secondary
GRID  = "#d8d7d2"
SURF  = "#ffffff"

plt.rcParams.update({
    "font.family": "serif",
    "font.serif": ["Liberation Serif"],
    "font.size": 9,
    "axes.edgecolor": INK2,
    "axes.linewidth": 0.8,
    "axes.labelcolor": INK,
    "text.color": INK,
    "xtick.color": INK2,
    "ytick.color": INK2,
    "xtick.labelsize": 8.5,
    "ytick.labelsize": 8.5,
    "figure.facecolor": SURF,
    "axes.facecolor": SURF,
    "savefig.facecolor": SURF,
})


def save(fig, name):
    for ext in ("png", "pdf"):
        fig.savefig(os.path.join(OUT, f"{name}.{ext}"), dpi=400,
                    bbox_inches="tight", pad_inches=0.05)
    plt.close(fig)
    print("wrote", name)


def tidy(ax, ygrid=True):
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    if ygrid:
        ax.set_axisbelow(True)
        ax.yaxis.grid(True, color=GRID, linewidth=0.6)
        ax.xaxis.grid(False)


def box(ax, x, y, w, h, text, fc="#ffffff", ec=INK2, fs=8.2, lw=0.9, ls="solid",
        weight="normal", tc=INK, ha="center"):
    ax.add_patch(FancyBboxPatch((x - w / 2, y - h / 2), w, h,
                                boxstyle="round,pad=0.012,rounding_size=0.02",
                                fc=fc, ec=ec, lw=lw, linestyle=ls, zorder=2))
    tx = x if ha == "center" else x - w / 2 + 0.16
    ax.text(tx, y, text, ha=ha, va="center", fontsize=fs, zorder=3,
            linespacing=1.5, color=tc, fontweight=weight)


def arrow(ax, p0, p1, ls="solid", color=INK2, lw=0.9, rad=0.0):
    ax.add_patch(FancyArrowPatch(p0, p1, arrowstyle="-|>", mutation_scale=9,
                                 lw=lw, color=color, linestyle=ls, zorder=1,
                                 connectionstyle=f"arc3,rad={rad}",
                                 shrinkA=2, shrinkB=3))


# =========================================================================
# Figure 1 - Directed acyclic graph
# =========================================================================
def fig1():
    fig, ax = plt.subplots(figsize=(7.4, 4.9))
    ax.set_xlim(0, 10); ax.set_ylim(-1.0, 7.2); ax.axis("off")

    conf = ("Measured confounders (adjustment set)\n"
            "age · sex · height · body mass index · ASA status\n"
            "baseline MAP · baseline heart rate · preload volume\n"
            "surgical site · duration of surgery · operator experience")
    box(ax, 5.0, 6.2, 6.5, 1.4, conf, fc="#eaf1fb", ec=F_COL, fs=8.0)

    box(ax, 1.75, 4.0, 2.7, 0.95,
        "Injection pattern\n(fractionated vs bolus)", weight="bold", fs=8.6)
    box(ax, 8.25, 4.0, 2.7, 0.95,
        "Intraoperative\nhypotension", weight="bold", fs=8.6)
    box(ax, 5.0, 2.35, 2.5, 0.85, "Peak sensory level\n(mediator)",
        fc="#fdf0e9", ec=B_COL, fs=8.2)

    unm = ("Unmeasured\ncerebrospinal fluid volume · true injection rate")
    box(ax, 5.0, 0.55, 5.4, 0.9, unm, fc="#f6f6f4", ec=INK2, ls=(0, (4, 2)), fs=8.0)

    # confounder backdoor paths
    arrow(ax, (2.9, 5.5), (1.95, 4.5))
    arrow(ax, (7.1, 5.5), (8.05, 4.5))
    # direct path (straight, unobstructed)
    arrow(ax, (3.15, 4.0), (6.85, 4.0), color=INK, lw=1.3)
    ax.text(5.0, 4.22, "direct effect of interest", ha="center", fontsize=7.9,
            style="italic", color=INK2)
    # indirect path through the mediator
    arrow(ax, (1.9, 3.5), (4.15, 2.81), rad=-0.12)
    arrow(ax, (5.85, 2.81), (8.1, 3.5), rad=-0.12)
    # unmeasured backdoor
    arrow(ax, (3.1, 0.75), (1.75, 3.5), ls=(0, (4, 2)))
    arrow(ax, (6.9, 0.75), (8.25, 3.5), ls=(0, (4, 2)))

    ax.text(0.0, -0.62,
            "Blue: variables adjusted for. Orange: mediator, deliberately NOT adjusted for — conditioning on it would block\n"
            "part of the effect under study (overadjustment bias). Dashed: unmeasured, and the reason an E-value is reported.",
            fontsize=7.4, color=INK2, ha="left", linespacing=1.6)
    save(fig, "Figure1_DAG")


# =========================================================================
# Figure 2 - STROBE flow
# =========================================================================
def fig2():
    fig, ax = plt.subplots(figsize=(6.6, 6.4))
    ax.set_xlim(0, 10); ax.set_ylim(-0.35, 10.6); ax.axis("off")

    main_x, exc_x, w = 3.5, 7.6, 4.0

    box(ax, main_x, 9.9, w, 0.75, "Assessed for eligibility\nn = 168", fs=8.4)
    box(ax, exc_x, 8.75, 4.4, 1.35,
        "Excluded before enrolment (n = 31)\n"
        "· did not meet eligibility criteria   n = 22\n"
        "· declined consent   n = 6\n"
        "· could not be observed (logistic)   n = 3",
        fc="#f6f6f4", fs=7.7, ha="left")
    box(ax, main_x, 7.6, w, 0.75, "Enrolled and underwent\nsubarachnoid block   n = 137", fs=8.4)
    box(ax, exc_x, 6.45, 4.4, 1.35,
        "Excluded after enrolment (n = 9)\n"
        "· block failure or conversion to GA   n = 5\n"
        "· dose given in three aliquots   n = 2\n"
        "· incomplete haemodynamic record   n = 2",
        fc="#f6f6f4", fs=7.7, ha="left")
    box(ax, main_x, 5.3, w, 0.75, "Analysed\nn = 128", fs=8.4, weight="bold")

    box(ax, 2.15, 3.55, 3.5, 0.95,
        "Fractionated injection\nn = 58", fc="#eaf1fb", ec=F_COL, fs=8.4, weight="bold")
    box(ax, 6.6, 3.55, 3.5, 0.95,
        "Bolus injection\nn = 70", fc="#fdf0e9", ec=B_COL, fs=8.4, weight="bold")

    box(ax, 2.15, 1.95, 3.5, 0.72, "Complete outcome data\nn = 58 (100%)", fs=8.0)
    box(ax, 6.6, 1.95, 3.5, 0.72, "Complete outcome data\nn = 70 (100%)", fs=8.0)

    for y0, y1 in [(9.52, 8.0), (7.22, 5.7)]:
        arrow(ax, (main_x, y0), (main_x, y1))
    arrow(ax, (main_x, 9.0), (exc_x - 2.2, 8.9))
    arrow(ax, (main_x, 6.7), (exc_x - 2.2, 6.6))
    arrow(ax, (main_x, 4.92), (2.15, 4.05))
    arrow(ax, (main_x, 4.92), (6.6, 4.05))
    arrow(ax, (2.15, 3.07), (2.15, 2.33))
    arrow(ax, (6.6, 3.07), (6.6, 2.33))

    ax.text(0.1, 0.55,
            "Cohort sizes were determined by the distribution of practice among the eight contributing\n"
            "anaesthesiologists, not by any study procedure. Three used fractionation routinely, four used\n"
            "bolus injection routinely, and one varied.",
            fontsize=7.5, color=INK2, ha="left", linespacing=1.55)
    save(fig, "Figure2_STROBE_flow")


# =========================================================================
# Figure 3 - Covariate balance (love plot)
# =========================================================================
def fig3():
    cov = [
        ("Operator with ≥ 5 years experience", 0.34, 0.07),
        ("Duration of surgery",                0.20, 0.09),
        ("Preload volume administered",        0.17, 0.08),
        ("Baseline mean arterial pressure",    0.15, 0.07),
        ("Body mass index",                    0.14, 0.06),
        ("Baseline heart rate",                0.13, 0.04),
        ("Surgical site",                      0.13, 0.06),
        ("Age",                                0.12, 0.04),
        ("ASA physical status",                0.12, 0.05),
        ("Height",                             0.09, 0.05),
        ("Male sex",                           0.06, 0.03),
    ]
    cov = cov[::-1]
    y = np.arange(len(cov))
    before = [c[1] for c in cov]
    after = [c[2] for c in cov]

    fig, ax = plt.subplots(figsize=(7.0, 4.3))
    for yi, b, a in zip(y, before, after):
        ax.plot([a, b], [yi, yi], color=GRID, lw=1.1, zorder=1)
    ax.scatter(before, y, s=44, facecolors="none", edgecolors=INK2, lw=1.2,
               zorder=3, label="Before weighting")
    ax.scatter(after, y, s=44, color=F_COL, zorder=3, label="After IPTW")

    ax.axvline(0.10, color=B_COL, ls=(0, (5, 3)), lw=1.1, zorder=2)
    ax.text(0.106, 3.5, "balance threshold 0.10", fontsize=7.8,
            color=B_COL, va="center", rotation=90, ha="left")

    ax.set_yticks(y); ax.set_yticklabels([c[0] for c in cov], fontsize=8.2)
    ax.set_xlabel("Absolute standardised mean difference")
    ax.set_xlim(0, 0.38)
    ax.set_title("Covariate balance before and after inverse probability of treatment weighting",
                 fontsize=9.4, pad=10, loc="left")
    tidy(ax, ygrid=False)
    ax.set_axisbelow(True)
    ax.xaxis.grid(True, color=GRID, linewidth=0.6)
    ax.legend(frameon=False, fontsize=8.2, loc="lower right", handletextpad=0.4)
    ax.annotate("only covariate out of balance\nin the unweighted cohort",
                xy=(0.34, len(cov) - 1), xytext=(0.235, len(cov) - 3.15),
                fontsize=7.6, color=INK2, ha="center", linespacing=1.45,
                arrowprops=dict(arrowstyle="-|>", color=INK2, lw=0.8,
                                connectionstyle="arc3,rad=0.25"))
    save(fig, "Figure3_covariate_balance")


# =========================================================================
# Figures 4 & 5 - haemodynamic trajectories
# =========================================================================
TIME = np.array([0, 5, 10, 15, 20, 25, 30, 45, 60, 75, 90, 105, 120])
N_F  = np.array([58, 58, 58, 58, 58, 58, 58, 57, 56, 50, 45, 35, 26])
N_B  = np.array([70, 70, 70, 70, 70, 70, 70, 68, 65, 58, 51, 40, 28])

MAP_F = np.array([93, 86, 84, 84, 85, 86, 87, 88, 89, 90, 91, 91, 92], float)
MAP_B = np.array([92, 82, 77, 74, 75, 76, 78, 80, 82, 83, 84, 85, 86], float)
HR_F  = np.array([79, 77, 75, 74, 74, 75, 76, 77, 78, 78, 79, 79, 79], float)
HR_B  = np.array([80, 75, 70, 69, 69, 69, 70, 73, 74, 75, 76, 76, 77], float)


def traj(mean_f, mean_b, sd_f, sd_b, ylabel, title, nadir_note, fname, ylim):
    ci_f = 1.96 * sd_f / np.sqrt(N_F)
    ci_b = 1.96 * sd_b / np.sqrt(N_B)

    fig, ax = plt.subplots(figsize=(7.2, 4.2))
    ax.axvspan(90, 125, color="#f4f4f2", zorder=0)
    ax.text(107.5, ylim[1] - 1.2, "fewer than half\nthe cohort", fontsize=7.3,
            color=INK2, ha="center", va="top", linespacing=1.4)

    for m, ci, col, lab in ((mean_b, ci_b, B_COL, "Bolus"),
                            (mean_f, ci_f, F_COL, "Fractionated")):
        ax.fill_between(TIME, m - ci, m + ci, color=col, alpha=0.16, lw=0, zorder=1)
        ax.plot(TIME, m, color=col, lw=2.0, zorder=3, label=lab,
                solid_capstyle="round")
        ax.plot(TIME, m, "o", color=col, ms=4.2, zorder=4,
                markeredgecolor=SURF, markeredgewidth=1.2)

    ax.axhline(mean_f[0], color=INK2, ls=(0, (2, 3)), lw=0.8, zorder=2)
    ax.text(112, mean_f[0] + 0.3, "baseline", fontsize=7.4, color=INK2, ha="right")

    # direct labels
    ax.text(TIME[-1] + 2.5, mean_f[-1], "Fractionated", color=F_COL,
            fontsize=8.6, va="center", fontweight="bold")
    ax.text(TIME[-1] + 2.5, mean_b[-1], "Bolus", color=B_COL,
            fontsize=8.6, va="center", fontweight="bold")

    i_b = int(np.argmin(mean_b)); i_f = int(np.argmin(mean_f))
    ax.annotate(nadir_note[0], xy=(TIME[i_b], mean_b[i_b]),
                xytext=(TIME[i_b] + 14, mean_b[i_b] - (ylim[1] - ylim[0]) * 0.12),
                fontsize=7.7, color=B_COL, linespacing=1.45,
                arrowprops=dict(arrowstyle="-|>", color=B_COL, lw=0.8,
                                connectionstyle="arc3,rad=-0.25"))
    ax.annotate(nadir_note[1], xy=(TIME[i_f], mean_f[i_f]),
                xytext=(TIME[i_f] + 12, mean_f[i_f] + (ylim[1] - ylim[0]) * 0.16),
                fontsize=7.7, color=F_COL, linespacing=1.45,
                arrowprops=dict(arrowstyle="-|>", color=F_COL, lw=0.8,
                                connectionstyle="arc3,rad=0.25"))

    ax.set_xlabel("Time after intrathecal injection (min)")
    ax.set_ylabel(ylabel)
    ax.set_title(title, fontsize=9.6, pad=10, loc="left")
    ax.set_xticks([0, 15, 30, 45, 60, 75, 90, 105, 120])
    ax.set_xlim(-3, 138); ax.set_ylim(*ylim)
    tidy(ax)
    ax.legend(frameon=False, fontsize=8.4, loc="lower left", ncol=2,
              handletextpad=0.5, columnspacing=1.4,
              bbox_to_anchor=(0.0, -0.005))
    save(fig, fname)


# =========================================================================
# Figure 6 - forest plot
# =========================================================================
def fig6():
    rows = [
        ("h", "Primary outcome: hypotension, across analyses", None, None, None),
        ("d", "Crude (unadjusted)",                    0.23, 0.10, 0.56),
        ("d", "Adjusted multivariable model",          0.29, 0.12, 0.68),
        ("d", "Inverse probability of treatment weighting", 0.31, 0.14, 0.69),
        ("d", "Propensity score matched (48 pairs)",   0.33, 0.13, 0.84),
        ("d", "Multiple imputation",                   0.29, 0.13, 0.66),
        ("d", "Excluding the operator who used both",  0.27, 0.11, 0.67),
        ("s", "", None, None, None),
        ("h", "Other outcomes, adjusted", None, None, None),
        ("d", "Mephentermine administered",            0.24, 0.09, 0.63),
        ("d", "Nausea",                                0.36, 0.13, 1.02),
        ("d", "Vomiting",                              0.21, 0.03, 1.62),
        ("d", "Bradycardia",                           0.19, 0.02, 1.49),
    ]
    rows = rows[::-1]
    fig, ax = plt.subplots(figsize=(6.9, 4.6))
    global TR_AXY
    TR_AXY = blended_transform_factory(ax.transAxes, ax.transData)
    TR_XAX = blended_transform_factory(ax.transData, ax.transAxes)

    ylabels, yticks = [], []
    for i, (kind, lab, est, lo, hi) in enumerate(rows):
        if kind == "s":
            ylabels.append(""); yticks.append(i); continue
        if kind == "h":
            ylabels.append(lab); yticks.append(i); continue
        primary = lab.startswith("Adjusted")
        col = F_COL if primary else INK
        ax.plot([lo, hi], [i, i], color=col, lw=1.5, solid_capstyle="butt", zorder=3)
        for x in (lo, hi):
            ax.plot([x, x], [i - 0.16, i + 0.16], color=col, lw=1.2, zorder=3)
        ax.plot(est, i, "D" if primary else "o", color=col,
                ms=7.5 if primary else 5.5, zorder=4,
                markeredgecolor=SURF, markeredgewidth=1.0)
        ax.text(1.035, i, f"{est:.2f} ({lo:.2f}–{hi:.2f})", fontsize=7.9,
                va="center", ha="left", color=INK, transform=TR_AXY)
        ylabels.append("   " + lab); yticks.append(i)

    ax.axvline(1.0, color=INK2, lw=1.0, zorder=2)
    ax.set_xscale("log")
    ax.set_xlim(0.015, 2.2)
    ticks = [0.02, 0.05, 0.1, 0.25, 0.5, 1.0, 2.0]
    ax.set_xticks(ticks); ax.set_xticklabels([str(t) for t in ticks])
    ax.set_yticks(yticks); ax.set_yticklabels(ylabels, fontsize=8.3)
    for lbl, (kind, *_rest) in zip(ax.get_yticklabels(), rows):
        if kind == "h":
            lbl.set_fontweight("bold"); lbl.set_fontsize(8.4)
    ax.set_ylim(-0.8, len(rows) - 0.2)
    ax.set_xlabel("Adjusted risk ratio (log scale), fractionated versus bolus")
    ax.set_title("Effect estimates and their stability across pre-specified analyses",
                 fontsize=9.6, pad=18, loc="left")
    ax.text(1.035, len(rows) - 0.45, "RR (95% CI)", fontsize=8.0,
            ha="left", va="center", fontweight="bold", transform=TR_AXY)
    ax.text(0.85, -0.135, "← favours fractionated", fontsize=7.8, color=INK2,
            ha="right", va="top", transform=TR_XAX)
    ax.text(1.18, -0.135, "favours bolus →", fontsize=7.8, color=INK2,
            ha="left", va="top", transform=TR_XAX)
    ax.spines["top"].set_visible(False); ax.spines["right"].set_visible(False)
    ax.spines["left"].set_visible(False)
    ax.tick_params(axis="y", length=0)
    ax.set_axisbelow(True)
    ax.xaxis.grid(True, color=GRID, linewidth=0.6)
    save(fig, "Figure6_forest")


if __name__ == "__main__":
    fig1()
    fig2()
    fig3()
    traj(MAP_F, MAP_B, 6.0, 7.0,
         "Mean arterial pressure (mmHg)",
         "Mean arterial pressure after intrathecal injection",
         ("nadir 74 mmHg at 15 min\n19.6% below baseline",
          "nadir 84 mmHg\n9.7% below baseline"),
         "Figure4_MAP", (68, 98))
    traj(HR_F, HR_B, 7.0, 8.0,
         "Heart rate (beats/min)",
         "Heart rate after intrathecal injection",
         ("nadir 69 beats/min\nat 20 min", "nadir 74 beats/min"),
         "Figure5_HR", (64, 86))
    fig6()
