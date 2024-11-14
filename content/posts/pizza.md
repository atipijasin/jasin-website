+++
title = 'How many pizzas 🍕can you make knowing the amount of flour and desired dough hydration?'
date = '2025-01-16T20:00:00+01:00'
author = 'Jasin Atipi'
+++

Some time ago, a friend and I were organising a pizza party
and were in the process of making pizza doughs.

He's the pizza expert, and I'm no cook. 

His father was also present and was
helping us out with the process.

At some point, he showed me an amazing spreadsheet
that was able to tell you how many pizzas $P$ you could make given this information:
- $F$ Amount of flour (in grams)
  - the flour type is important as it affects the pizza quality 
- $H$ Desired dough hydration (percentage expressed as a number from 0 to 100) 
  - Hydration represents the ratio of water to flour in the dough
  - e.g $60$% hydration means $60g$ (the same as $60ml$) of water for every $100g$ of flour
- $W$ Desired dough weight per pizza (in grams)
  - dependes on how large and thick you want your pizza to be
  - it could range from $200g$ to $300g$ based on your preference

#### ⚠️ You also need to put yeast and salt in the dough, but we're not considering those here. The amount of yeast and salt is usually a small percentage of the flour weight.

The gist of it is this formula:

\[
\begin{aligned}
P = \frac{F (1 + \frac{H}{100})}{W}
\end{aligned}
\]

### What if you know how many pizzas you want and you need to know how much flour you need?
Let's say that you know the number of pizzas you want to make, and you also know the hydration and the desired weight of each pizza. How much flour will you need?

We can just use some middle school algebra to rearrange the formula:

\[
\begin{aligned}
F = \frac{P \cdot W}{(1 + \frac{H}{100})}
\end{aligned}
\]

### I made a calculator to quickly it use for myself, you can find it by [clicking here 🍕](/pizza-calculator)