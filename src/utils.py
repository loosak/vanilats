import numpy as np
import matplotlib.pyplot as plt
import io
plt.style.use('seaborn-paper')

def f(t):
    return np.exp(-t) * np.cos(2*np.pi*t)

fig, ax=plt.subplots(figsize=(10,8), subplot_kw={"projection":"polar"})
ax.set_gid('ax_1')
fig.tight_layout()

t = np.linspace(0, 2*np.pi, 100)

ax.plot(t, np.sin(t), color='blue',  gid='plot_1')
ax.plot(t, f(t),      color='green', gid='plot_2')
ax.grid()
svg_image = io.BytesIO()
_ = plt.savefig(svg_image, format = "svg")
xml_string = svg_image.getvalue().decode()
xml_string