"""Figures for the non-randomised comparative (quasi-experimental) teaching draft.

Same validated palette as the observational draft: dataviz categorical slots 1
(blue, fractionated) and 2 (orange, bolus).
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "figures")
os.makedirs(OUT, exist_ok=True)

F_COL = "#2a78d6"
B_COL = "#eb6834"
INK   = "#0b0b0b"
INK2  = "#52514e"
GRID  = "#d8d7d2"
SURF  = "#ffffff"
BAD   = "#e34948"   # status: serious - used only for the "absent safeguard" mark
GOOD  = "#008300"   # status: good  - used only for the "present safeguard" mark

plt.rcParams.update({
    "font.family": "serif", "font.serif": ["Liberation Serif"], "font.size": 9,
    "axes.edgecolor": INK2, "axes.linewidth": 0.8, "axes.labelcolor": INK,
    "text.color": INK, "xtick.color": INK2, "ytick.color": INK2,
    "xtick.labelsize": 8.5, "ytick.labelsize": 8.5,
    "figure.facecolor": SURF, "axes.facecolor": SURF, "savefig.facecolor": SURF,
})


def save(fig, name):
    for ext in ("png", "pdf"):
        fig.savefig(os.path.join(OUT, f"{name}.{ext}"), dpi=400,
                    bbox_inches="tight", pad_inches=0.05)
    plt.close(fig)
    print("wrote", name)


def box(ax, x, y, w, h, text, fc="#ffffff", ec=INK2, fs=8.2, lw=0.9, ls="solid",
        weight="normal", tc=INK, ha="center"):
    ax.add_patch(FancyBboxPatch((x - w / 2, y - h / 2), w, h,
                                boxstyle="round,pad=0.012,rounding_size=0.02",
                                fc=fc, ec=ec, lw=lw, linestyle=ls, zorder=2))
    tx = x if ha == "center" else x - w / 2 + 0.16
    ax.text(tx, y, text, ha=ha, va="center", fontsize=fs, zorder=3,
            linespacing=1.5, color=tc, fontweight=weight)


def arrow(ax, p0, p1, ls="solid", color=INK2, lw=0.9, rad=0.0, scale=9):
    ax.add_patch(FancyArrowPatch(p0, p1, arrowstyle="-|>", mutation_scale=scale,
                                 lw=lw, color=color, linestyle=ls, zorder=1,
                                 connectionstyle=f"arc3,rad={rad}",
                                 shrinkA=2, shrinkB=3))


# =========================================================================
# Figure 1 - TREND participant flow
# =========================================================================
def fig1():
    fig, ax = plt.subplots(figsize=(6.6, 6.4))
    ax.set_xlim(0, 10); ax.set_ylim(-0.35, 10.6); ax.axis("off")
    mx, ex, w = 3.5, 7.6, 4.0

    box(ax, mx, 9.9, w, 0.75, "Assessed for eligibility\nn = 118", fs=8.4)
    box(ax, ex, 8.9, 4.4, 1.0,
        "Excluded before allocation (n = 12)\n"
        "· did not meet eligibility criteria   n = 8\n"
        "· declined consent   n = 4", fc="#f6f6f4", fs=7.7, ha="left")
    box(ax, mx, 7.85, 4.9, 0.8,
        "Allocated by ALTERNATE assignment\naccording to operating list position   n = 106",
        fs=8.0, weight="bold")

    box(ax, 2.0, 6.35, 3.4, 0.62, "Assigned Group F\nn = 53",
        fc="#eaf1fb", ec=F_COL, fs=8.2)
    box(ax, 6.6, 6.35, 3.4, 0.62, "Assigned Group B\nn = 53",
        fc="#fdf0e9", ec=B_COL, fs=8.2)

    box(ax, 2.0, 4.75, 3.5, 1.15,
        "Withdrawn (n = 3)\n· block failure   n = 1\n"
        "· consent withdrawn   n = 1\n· incomplete record   n = 1",
        fc="#f6f6f4", fs=7.5, ha="left")
    box(ax, 6.6, 4.75, 3.5, 1.15,
        "Withdrawn (n = 3)\n· block failure   n = 1\n"
        "· list order changed after\n   assignment   n = 2",
        fc="#fdecea", ec=BAD, fs=7.5, ha="left")

    box(ax, 2.0, 3.0, 3.4, 0.7, "Analysed\nn = 50", fc="#eaf1fb", ec=F_COL,
        fs=8.4, weight="bold")
    box(ax, 6.6, 3.0, 3.4, 0.7, "Analysed\nn = 50", fc="#fdf0e9", ec=B_COL,
        fs=8.4, weight="bold")

    arrow(ax, (mx, 9.52), (mx, 8.3))
    arrow(ax, (mx, 9.1), (ex - 2.2, 9.0))
    arrow(ax, (mx, 7.45), (2.0, 6.7))
    arrow(ax, (mx, 7.45), (6.6, 6.7))
    arrow(ax, (2.0, 6.04), (2.0, 5.36))
    arrow(ax, (6.6, 6.04), (6.6, 5.36))
    arrow(ax, (2.0, 4.17), (2.0, 3.38))
    arrow(ax, (6.6, 4.17), (6.6, 3.38))

    ax.annotate("the failure mode that unconcealed\nalternate allocation permits",
                xy=(8.36, 4.6), xytext=(7.4, 1.8), fontsize=7.5, color=BAD,
                ha="center", linespacing=1.5,
                arrowprops=dict(arrowstyle="-|>", color=BAD, lw=0.9,
                                connectionstyle="arc3,rad=-0.62"))
    ax.text(0.1, 0.9,
            "Allocation was by strict alternation of position on the operating list. No random sequence was\n"
            "generated and no allocation concealment was possible.",
            fontsize=7.5, color=INK2, ha="left", linespacing=1.55)
    save(fig, "C_Figure1_TREND_flow")


# =========================================================================
# Figure 2 - allocation scheme and where bias enters
# =========================================================================
def fig2():
    fig, ax = plt.subplots(figsize=(7.4, 5.0))
    ax.set_xlim(0, 10); ax.set_ylim(-0.2, 7.0); ax.axis("off")

    ax.text(0.0, 6.75, "How the assignment was made", fontsize=9.4,
            fontweight="bold", ha="left")

    # the operating list
    x0, dx, bw = 0.75, 1.16, 1.0
    for i in range(8):
        grp = "F" if i % 2 == 0 else "B"
        col = F_COL if grp == "F" else B_COL
        fc = "#eaf1fb" if grp == "F" else "#fdf0e9"
        box(ax, x0 + i * dx, 5.65, bw, 0.72, f"{i+1}\n{grp}", fc=fc, ec=col,
            fs=8.4, weight="bold")
    ax.text(0.25, 4.98, "position on the operating list  →", fontsize=7.8,
            color=INK2, ha="left")

    ax.text(0.0, 4.45,
            "Assignment is fully determined by list position: knowing position n tells you assignment n+1.",
            fontsize=8.2, ha="left", color=INK)

    # the swap
    box(ax, 3.07, 3.35, 1.0, 0.72, "3\nF", fc="#eaf1fb", ec=F_COL, fs=8.4, weight="bold")
    box(ax, 4.23, 3.35, 1.0, 0.72, "4\nB", fc="#fdf0e9", ec=B_COL, fs=8.4, weight="bold")
    ax.add_patch(FancyArrowPatch((3.07, 3.85), (4.23, 3.85), arrowstyle="<|-|>",
                                 mutation_scale=9, lw=1.0, color=BAD,
                                 connectionstyle="arc3,rad=-0.55", zorder=1))
    ax.text(0.0, 3.35,
            "If the list order\nis changed after\nassignment …", fontsize=7.9,
            color=INK2, ha="left", va="center", linespacing=1.5)
    ax.text(5.05, 3.35,
            "… the two patients exchange techniques.\nThe order of an operating list is routinely adjusted for\n"
            "urgency, equipment and surgeon availability.",
            fontsize=7.9, color=BAD, ha="left", va="center", linespacing=1.5)

    ax.plot([0.0, 10.0], [2.55, 2.55], color=GRID, lw=0.9)

    ax.text(0.0, 2.2, "The four safeguards of a randomised trial", fontsize=9.4,
            fontweight="bold", ha="left", va="top")

    items = [
        ("Random sequence generation", False,
         "alternation is systematic, not random"),
        ("Allocation concealment", False,
         "a deterministic public rule can always be deciphered"),
        ("Independently held, auditable sequence", False,
         "compliance with the rule cannot be demonstrated"),
        ("Blinding of participant and outcome assessor", True,
         "retained in full — but it protects measurement, not group composition"),
    ]
    for i, (label, present, note) in enumerate(items):
        y = 1.6 - i * 0.45
        mark, col = ("✓", GOOD) if present else ("✗", BAD)
        ax.text(0.06, y, mark, fontsize=11.5, color=col, ha="left",
                va="center", fontweight="bold", family="DejaVu Sans")
        ax.text(0.52, y, label, fontsize=8.3, ha="left", va="center",
                color=INK, fontweight="bold" if present else "normal")
        ax.text(4.55, y, note, fontsize=7.7, ha="left", va="center", color=INK2)

    save(fig, "C_Figure2_allocation")


# =========================================================================
# Figure 3 - two-panel forest of mean differences
# =========================================================================
def fig3():
    dur = [
        ("Duration of sensory block\n(primary analysis)", 26.0, 17.8, 34.2, True),
        ("Duration of sensory block\n(adjusted, ANCOVA)", 24.3, 16.0, 32.6, False),
        ("Duration of sensory block\n(incl. 2 deviations)", 25.1, 16.9, 33.3, False),
        ("Duration of motor block", 22.0, 12.6, 31.4, False),
    ]
    ons = [
        ("Sensory onset", 1.20, 0.77, 1.63, False),
        ("Motor onset", 1.30, 0.75, 1.85, False),
    ]

    fig, axes = plt.subplots(1, 2, figsize=(7.4, 3.6),
                             gridspec_kw={"width_ratios": [1.85, 1.0]})

    for ax, rows, title, xlim, xlabel in (
        (axes[0], dur, "Duration outcomes", (0, 40), "Mean difference (min)"),
        (axes[1], ons, "Onset outcomes", (0, 2.2), "Mean difference (min)"),
    ):
        rows = rows[::-1]
        NSLOTS = 4                      # top-align both panels on a common grid
        off = NSLOTS - len(rows)
        for i, (lab, est, lo, hi, primary) in enumerate(rows):
            y = i + off
            col = F_COL if primary else INK
            ax.plot([lo, hi], [y, y], color=col, lw=1.5, zorder=3)
            for x in (lo, hi):
                ax.plot([x, x], [y - 0.13, y + 0.13], color=col, lw=1.2, zorder=3)
            ax.plot(est, y, "D" if primary else "o", color=col,
                    ms=7.5 if primary else 5.5, zorder=4,
                    markeredgecolor=SURF, markeredgewidth=1.0)
        ax.axvline(0, color=INK2, lw=1.0, zorder=2)
        ax.set_yticks([i + off for i in range(len(rows))])
        ax.set_yticklabels([r[0] for r in rows], fontsize=7.9)
        ax.set_ylim(-0.7, NSLOTS - 0.3)
        ax.set_xlim(*xlim)
        ax.set_xlabel(xlabel, fontsize=8.4)
        ax.set_title(title, fontsize=9.0, loc="left", pad=8)
        for s in ("top", "right", "left"):
            ax.spines[s].set_visible(False)
        ax.tick_params(axis="y", length=0)
        ax.set_axisbelow(True)
        ax.xaxis.grid(True, color=GRID, linewidth=0.6)

    axes[0].text(0.5, -0.22, "longer with fractionated injection  →", fontsize=7.6,
                 color=INK2, ha="left", transform=axes[0].transAxes)
    axes[1].text(0.5, -0.22, "slower with fractionated  →", fontsize=7.6,
                 color=INK2, ha="right", transform=axes[1].transAxes)
    fig.subplots_adjust(wspace=0.75)
    save(fig, "C_Figure3_forest")


# =========================================================================
# Figures 4 & 5 - haemodynamic trajectories
# =========================================================================
TIME  = np.array([0, 5, 10, 15, 20, 25, 30, 45, 60, 75, 90, 105, 120])
MAP_F = np.array([93, 85, 85, 86, 86, 87, 88, 89, 90, 90, 91, 92, 92], float)
MAP_B = np.array([92, 80, 75, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85], float)
HR_F  = np.array([78, 77, 76, 75, 75, 76, 76, 77, 77, 78, 78, 78, 78], float)
HR_B  = np.array([80, 78, 73, 70, 68, 69, 70, 72, 74, 75, 76, 76, 77], float)


def traj(mf, mb, sd_f, sd_b, ylabel, title, notes, fname, ylim):
    n = 50.0
    ci_f = 1.96 * sd_f / np.sqrt(n)
    ci_b = 1.96 * sd_b / np.sqrt(n)

    fig, ax = plt.subplots(figsize=(7.2, 4.1))
    ax.axvspan(75, 128, color="#f4f4f2", zorder=0)
    ax.text(101, ylim[1] - 1.0, "n under observation\nnot yet confirmed", fontsize=7.3,
            color=INK2, ha="center", va="top", linespacing=1.4)

    for m, ci, col, lab in ((mb, ci_b, B_COL, "Bolus"),
                            (mf, ci_f, F_COL, "Fractionated")):
        ax.fill_between(TIME, m - ci, m + ci, color=col, alpha=0.16, lw=0, zorder=1)
        ax.plot(TIME, m, color=col, lw=2.0, zorder=3, label=lab, solid_capstyle="round")
        ax.plot(TIME, m, "o", color=col, ms=4.2, zorder=4,
                markeredgecolor=SURF, markeredgewidth=1.2)

    ax.axhline(mf[0], color=INK2, ls=(0, (2, 3)), lw=0.8, zorder=2)
    ax.text(70, mf[0] + 0.3, "baseline", fontsize=7.4, color=INK2, ha="right")

    ax.text(TIME[-1] + 2.5, mf[-1], "Fractionated", color=F_COL, fontsize=8.6,
            va="center", fontweight="bold")
    ax.text(TIME[-1] + 2.5, mb[-1], "Bolus", color=B_COL, fontsize=8.6,
            va="center", fontweight="bold")

    ib, iff = int(np.argmin(mb)), int(np.argmin(mf))
    span = ylim[1] - ylim[0]
    ax.annotate(notes[0], xy=(TIME[ib], mb[ib]),
                xytext=(TIME[ib] + 15, mb[ib] - span * 0.13), fontsize=7.7,
                color=B_COL, linespacing=1.45,
                arrowprops=dict(arrowstyle="-|>", color=B_COL, lw=0.8,
                                connectionstyle="arc3,rad=-0.25"))
    ax.annotate(notes[1], xy=(TIME[iff], mf[iff]),
                xytext=(TIME[iff] + 11, mf[iff] + span * 0.15), fontsize=7.7,
                color=F_COL, linespacing=1.45,
                arrowprops=dict(arrowstyle="-|>", color=F_COL, lw=0.8,
                                connectionstyle="arc3,rad=0.25"))

    ax.set_xlabel("Time after intrathecal injection (min)")
    ax.set_ylabel(ylabel)
    ax.set_title(title, fontsize=9.6, pad=10, loc="left")
    ax.set_xticks([0, 15, 30, 45, 60, 75, 90, 105, 120])
    ax.set_xlim(-3, 140); ax.set_ylim(*ylim)
    ax.spines["top"].set_visible(False); ax.spines["right"].set_visible(False)
    ax.set_axisbelow(True); ax.yaxis.grid(True, color=GRID, linewidth=0.6)
    ax.legend(frameon=False, fontsize=8.4, loc="lower left", ncol=2,
              handletextpad=0.5, columnspacing=1.4, bbox_to_anchor=(0.0, -0.005))
    save(fig, fname)


if __name__ == "__main__":
    fig1()
    fig2()
    fig3()
    traj(HR_F, HR_B, 6.0, 7.0, "Heart rate (beats/min)",
         "Heart rate after intrathecal injection",
         ("nadir 68 beats/min\nat 20 min", "nadir 75 beats/min"),
         "C_Figure4_HR", (63, 85))
    traj(MAP_F, MAP_B, 6.0, 6.0, "Mean arterial pressure (mmHg)",
         "Mean arterial pressure after intrathecal injection",
         ("nadir 73 mmHg\nat 15 min", "nadir 85 mmHg at 5 min"),
         "C_Figure5_MAP", (68, 98))
