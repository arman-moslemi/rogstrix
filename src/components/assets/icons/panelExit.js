import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={21}
    height={21}
    {...props}
  >
    <image
      width={21}
      height={21}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d1/kGVlfefx91cQEAZdAiIgxCAYKBGjzq6kivVHwa5BgyBJYYKsQcWslYXaVC1iMLIuUamydEnFWqnUrmJAjW5J+QMkrFGxUDNZMUu0/FVMBI2CAyLIKj9Gx2G/+8c5jU1PT3ff7nvvc57zvF9Vt5gZpu/99K25z/fTzzn33MhM9GgRcRBwDHBs/9+Dgf2BTf1/91/y+73KJJWqsQO4H3ig/+/9S35/N7AVuAXYmpn3FMopNSNaLgARsS9wIvAcukG/MPR/pWQuSfyYvgz0t38EtmTmQ0VTSSPSVAGIiL2AE4CT+ttv4k/vUi12AF8CPtffbsrMHWUjSfUafQGIiKcCZwIn0/20v2/ZRJKm5CFgC3ADcHVmfqdwHqkqoywAEXEA8HLglXRDX9L4bQE+AHwkM+8rHUYautEUgIh4LPASuqF/KrB32USSCvk5cB1dGbg+M39ROI80SNUXgIg4GLgAOBc4sHAcScNyL3AFcFlm3l06jDQk1RaAiDgcuBD4Q+BxheNIGrbtwHuAd2bmHaXDSENQXQGIiCOBi4BX4Rn8kiazA7gSeHtmfrdwFqmoagpAP/gvAV4B7Fk2jaTK7QQ+BFxiEVCrBl8A+vfuXwi8Cbf6JU3XduBSukMDXlNATRl0AYiIk4HL6a7QJ0mzshU4LzNvKB1EmpfHlA6wnIg4JCI+BHwWh7+k2TsG+GxEfCgiDikdRpqHQRWA6JxH18bPKp1HUnPOArZGxHkREaXDSLM0mEMAEXEg3dm5pxaOIknQXUzoVZl5b+kg0iwMogBExInAh4EjSmeRpEVuB87KzC2lg0jTVvQQQL/l/yfAjTj8JQ3PEcCNEfEnHhLQ2BTbAYiIg+iu1X1KkQCSNJlPAa/MzHtKB5GmoUgBiIhnAtcDT577g0vS+v0AeElmfq10EGmj5n4IICKeB3wBh7+k+jwZ+EK/jklVm2sBiIjTgU8DT5jn40rSFD0B+HS/nknVmlsBiIhzgY8C+8zrMSVpRvYBPtqva1KV5lIAIuIi4L3AHvN4PEmagz2A9/brm1SdmZ8EGBHvoPswH0kaq3dm5htKh5AmMdMdgL4ZO/wljd2F7gSoNjPbAeiPjb13JncuScP02sy8onQIaS1mUgD6s2M/isf8JbXlYeB3M/Oa0kGk1Uy9APTvj/00nu0vqU0/A16UmV8sHURayVQLQH+Fvy/g+/wlte0nwPO9YqCGbGoFoL+2/1fxCn+SBN1lg5/lZwdoqKbyLoD+U7I+gMNfkhY8GfiAnyKooZrW2wDfgJ/qJ0lLnUK3PkqDs+FDABFxInAjsOc0AknSyOwEXpiZW0oHkRbbUAGIiAOBrwBHTC2RJI3P7cCzM/Pe0kGkBes+BNAf17oSh78kreYI4ErPB9CQbOQcgP8AnDqtIJI0cqfSrZvSIKzrEEBEHAJsBR4/9USSNF4/BY7JzLtKB5HWuwPw5zj8JWlSj6dbP6XiJt4BiIiTgc/OJo4kNeHfZOYNpUOobRMVgIjYC/gacMzMEknS+G0FnpmZO0oHUbsmfe/+hbQ3/O8Dvg5s6293Lvr1NmBbZj5QLp40fBGxCThsye3QRb8+HjigWMD5O4ZuPb20dBC1a807ABFxJPBN4HEzTTQMtwOf6G9fyMydhfNIoxYRewLPB17W31p4e/F24LjM/G7pIGrTJAXgKuAPZhunqG/QD/3MvLl0GKllEbGZX5aBZxSOM0vvz8xzSodQm9ZUAPqf/v+JcV7u92rgzZl5S+kgknYVEccCbwHOLJ1lBnYCv+4ugEpY69sAL2J8w//zwAmZ+XKHvzRcmXlLZr4cOIHudTsme9Ktr9LcrboDEBGHA7cBe80l0ex9E7goM68rHUTS5CLiVODtwHGls0zJDuCozLyjdBC1ZS07ABcyjuF/J3Au8BsOf6le/ev3N+hez3cWjjMNe9Gts9JcrbgDEBEHA/9M/Wf+bwF+JzPvLh1E0vT0a9THgBNLZ9mg7cCvuUZpnlbbAbiA+of/+4CTfGFJ49O/rk+ie53X7HF06600N7vdAYiIx9Jtrx0410TT8zBwQWa+q3QQSbMXEX8MXAbsUTrLOt0LHJqZvygdRG1YaQfgJdQ7/O8DXuzwl9rRv95fTPf6r9GBdOuuNBcrFYBXzi3FdN1K9/a+z5QOImm++tf9CXTrQI1qXXdVoWUPAUTEAXTb/3vPPdHG3Ec3/L9dOoikciLiacBN1Pf5Aj+nOwxQ6y6GKrK7HYCXU9/wfxj4PYe/pH4d+D26daEme9Otv9LM7a4A1LgNdYHb/pIW9OtBjWfW17j+qkK7HAKIiKfSXfmvJu/LzHNLh5A0PBFxBfCa0jkmdFRmfqd0CI3bcjsAtX3gxhbgj0qHkDRYf0S3TtSktnVYFVquAJw89xTrdyfdFf52lA4iaZj69eF3qOuywTWtw6rUowpAROxFXZfUvNgr/ElaTb9OXFw6xwRO7NdjaWaW7gCcAOxbIsg6fBO4qnQISdW4im7dqMG+dOuxNDNLC8BJRVKsz0WZWdtbfCQV0q8XF5XOMYGa1mNVqNYC8Hk/0lfSpPp14/Olc6xRLeuxKvXI2wAjYl+6K+nVcNzphMz8cukQkuoTEc+lu0rg0O0ADsjMh0oH0Tgt3gE4kTqG/9UOf0nr1a8fV5fOsQa1nZStyiwuAM8plmIyby4dQFL1allHalmXVaHFBeCYYinW7huZeUvpEJLq1q8j3yidYw1qWJdVqdoKwCdKB5A0GjWsJzWsy6rU4gJwbLEUa1fDC1ZSHWpYT2pYl1WpyEwi4iDgR6XDrOL2zPzV0iEkjUdEfB84onSOVTwxM+8pHULjs7ADUMM20zWlA0ganRrWlRrWZ1VooQDUsM1Uw3adpLrUsK7UsD6rQrXsANxHPVfvklSPz9OtL0M29PVZlVooAAcXTbG6r2fmztIhJI1Lv658vXSOVQx9fValFgrA/kVTrG5b6QCSRmvo68vQ12dVaqEAbCqaYnVDf4FKqtfQ15ehr8+qVC07AHeWDiBptIa+vgx9fValaikAQ2/okuo19PVl6OuzKmUBkNS6oa8vQ1+fVSnPAZDUuqGvL0Nfn1UpdwAktW7o68vQ12dVauGzALJ0kJVkZpTOIGm8XAPVoses/lckSdLYWAAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACQJHigdYAVDzqaKWQAkCbaVDrCCIWdTxSwAkjTsITvkbKqYBUCShj1kh5xNFbMASBLcXDrACoacTRWzAEgSXFs6wAqGnE0VswBIal5m3gp8q3SOZXyrzyZNnQVAkjofLx1gGUPMpJGIzCQisnSQlWRmlM4gadwi4hDgVmC/0ll6DwJHZ+ZdpYNonNwBkCSgH7SXlc6xyGUOf82SOwCS1IuI/YHbgCcWjvIj4KjMvL9wDo2YOwCS1OsH7nmlcwDnOfw1axYASVokM68GLi0Y4dI+gzRTHgKQpCUiIujOwD99zg99DXBGZg56TdY4uAMgSUv0A/hsuoE8L9cAZzv8NS8WAElaRmY+CJzBfA4HXEr3k/+Dc3gsCfAQgCStKiLOBC5n+u8O+BHdCX8e89fcuQMgSavoB/RRwFvoLtCzUQ/293WUw1+luAMgSRPorxh4Pt3hgadP+OXfoju58N1e5EelWQAkaZ0i4mjgNGAzcNiiG8C2RbebgWv9YB8NiQVAkqQGeQ6AJEkNsgBIktQgC4AkSQ2yAEiS1CALgCRJDbIASJLUIAuAJEkNsgBIktQgC4AkSQ2yAEiS1CALgCRJDbIASJLUIAuAJEkNsgBIktQgC4AkSQ2yAEiS1CALgCRJDbIASJLUIAuAJEkNsgBIktQgC4AkSQ2yAEiS1CALgCRJDbIASJLUIAuAJEkNsgBIktQgC4AkSQ2yAEiS1CALgCRJDbIASJLUoD1LB5Akab0iYl/gJOAU4KnAof3tAOAe4E5gG7AVuB74YmbuLJN2WCIziYgsHWQlmRmlM0iShiMizgBeSzf895ngS38C/C3w7sz84iyy1cICIEmqRkS8CLgU+JdTuLu/Bf5zZv7DFO6rOhYASdLgRcRBwAeB35rB3X8Q+PeZuX0G9z1YFgBJ0qBFxDOAa4EjZ/gwNwOnZ+YPZvgYg+K7ACRJgxURpwH/m9kOf4DNwD9ExL+a8eMMhjsAkqRBiogXAp9hvu9YewB4cWb+3RwfswgLgCRpcCLiSODLwEEFHr6JEuAhAEnSoETEJuAaygx/gE3A/4qIf13o8efCAiBJGppLgOMLZxh9CfAQgCRpMCLicODbTHZxn1ka7eEAdwAkSUNyCcMZ/jDinQB3ACRJgxARTwFuA/YonWUZo9sJcAdAkjQUpzHM4Q8j3AmwAEiShuK3SwdYxahKgIcAJEnFRcR+wL3A3qWzrMEoDge4AyBJGoLN1DH8YSQ7ARYASdIQHFI6wISqLwEWAEnSEDypdIB1qLoEWAAkSUNQYwGAikuABUCSpI2psgRYACRJQ/DD0gE2qLoSYAGQJA1B7QUAKisBFgBJ0hDcVTrAlFRTArwQkCSpuMouBLQWg79YkDsAkqTiMvNB4MbSOaZo8DsBFgBJ0lD8TekAUzboEmABkCQNxbXAw6VDTNlgS4AFQJI0CJn5PeDK0jlmYJAlwJMAJUmDERGHA98G9imdZQYGdWKgOwCSpMHIzDuAy0vnmJFB7QS4AyBJGpSI2AT8PXB86SwzMoidAHcAJEmDkpkPAKcD95TOMiOD2AmwAEiSBiczvwucCewsnWVGipcAC4AkaZAy80bgHMb31sAFRUuABUCSNFiZ+SEsATNhAZAkDVpm/jWWgKmzAEiSBm9RCfh/pbPMyNxLgAVAklQFS8B0WQAkSdXIzA9iCZgKC4AkqSqWgOmwAEiSqmMJ2DgLgCSpSpaAjbEASJKq1ZeAV2EJmJgFQJJUtcz8AJaAiVkAJEnVswRMzgIgSRoFS8BkLACSpNGwBKydBUCSNCp9CXg1loAVWQAkSaOTme/HErAiC4AkaZQaKgEnrueLLQCSpNFqpARcFxHHT/qFFgBJ0qj1JeA1jLcE/AvgUxHxlEm+yAIgSRq9zLyKcZeAw4BPR8RBa/0CC4AkqQkNlIBfpzscsNda/rIFQJLUjAZKwAnAO9byFyMziYiccaANycwonUGSNB4RcQ7wPsb7g/BpmfnJlf6CBUCS1KSIeBVwBeMsAfcCz8rMO3b3F8b4TUuStKrMvBI4l3EeDjgQuGqlv2ABkCQ1a+Ql4KSIeMnu/qeHACRJzRvx4YCvAJszc5c5P7ZvVJKkiY14J+DZwJnL/Q93ACRJ6kXEq4H3Mq4fkLcCx2Xmw4v/cEzfoCRJG5KZfwW8lnHtBBwDnLP0D90BkCRpiRHuBHwfeFpm7lj4g7F8Y5IkTc0IdwJ+FXjd4j9wB0Cakog4GjgN2Ez3wRwLt00lc0lS74fAUZn5IMCehcNIVYuIQ4DzgTOApxeOI0kreRJwNvA/wEMA0rpExP4R8WfArcCbcPhLqsNLF37hIQBpQhFxJnA58MTSWSRpQtuBAzNzuzsA0hpF523AR3D4S6rT44CTwUMA0ppExH7Ax+m2+yWpZqeChwCkVUVE0A3/00tnkaQpuCMzj3AHQFrdW3H4SxqPwyPiWRYAaQX9CX9u+0sam1M9BCDtRkTsD9yGJ/xJGp+b3AGQdu/1OPwljdNz3QGQltFf4e9WYL/SWSRpFtwBkJZ3Pg5/SSNmAZCWd0bpAJI0SxYAaYn+U/28tr+kUbMASLs6rXQASZo1C4C0q82lA0jSrFkApF0dVjqAJM2aBUDalQVA0uhZAKRdWQAkjZ4FQJKkBlkApF1tKx1AkmbNAiDtygIgafQsANKuLACSRs8CIO3q5tIBJGnWLADSrq4tHUCSZs0CIC2RmbcC3yqdQ5JmyQIgLe/jpQNI0ixFZhIRWTrISjIzSmdQWyLiEOBWYL/SWSRpFtwBkJaRmXcBl5XOIUkzku4ASLsREfsDtwFPLJ1FkqbsJncApN3IzPuB80rnkKQZuM4CIK0gM68GLi2dQ5Km7DoPAUiriIige1fA6aWzSNIU3JGZR7gDIK0iMxM4G7imdBZJmoK/Ad8FIK1JZj4InIGHAyTV7zrwOgDSxCLiTOByfHeApPpsBw7MzO3uAEgT6k8MPAp4C/Bg4TiSNIkbMnM7eAhAWpfMvD8z/wtwNN1hAT87QFINPrnwCw8BSFMSEUcDpwGbgcMW3TaVzCVJvR8CR/XnNFkAJElaTkS8Gngv49kt/4+Z+d8WfmMBkCRpiREO/+8DT8vMHQt/MJZvTJKkqRjh8Af4s8XDH9wBkCTpESMd/luB4zLz4cV/OKZvUJKkdYuIVzG+4Q/w5qXDH9wBkCRpYfhfwfiG/1eAzf0lzR9lbN+oJEkTGfHwB7h4ueEP4/xmJUlak5EP/89l5vW7+58eApAkNWnkw/9e4FmZecfu/sIYv2lJklYUEecw3uEP8OqVhj+M9xuXJGlZ/fB/H+Odge/KzE+u9pc8BCBJakYDw/8m4PlLL/qznLE+AZIkPUoDw/+fgFPXMvxhvE+CJEmPaGD4bwNelJn3rPULxvpESJIEQET8AeMe/v8XOCUzvzfJF431yZAkaWH4/xXjnXcP0G37f33SLxzrEyJJalwjw//FmbllPV881idFktSwhob/3633Dsb6xEiSGhURr8Thv6qxPjmSpAb1w/9KxjvfpjL8YbxPkCSpMQ7/yYz1SZIkNcThP7mxPlGSpEY4/NdnrE+WJKkBEfHvcPivy1ifMEnSyPXD/yrGO8tmNvxhvE+aJGnEHP4bN9YnTpI0Ug7/6RjrkydJGiGH//SM9QmUJI1MRJyNw39qxvokSpJGxOE/fWN9IiVJI7Fo+O9ROsuMzH34gwVAkjRgEfEKHP4zEZlJROS8H3gSmRmlM0iS5isiXgh8BtizcJRZKTb8wQIgSRqgiDgS+DJwUOksM1J0+IOHACRJAxMRm4BrcPjPlAVAkjQ0lwDHlw4xI4MY/uAhAEnSgETE4cC3gX1KZ5mBwQx/cAdAkjQsl+Dwnwt3ACRJgxARTwFuY3xv+Rvc8Ad3ACRJw3EaDv+5sQBIkobit0sHmLLBDn/wEIAkaQAiYj/gXmDv0lmmZNDDH9wBkCQNw2Yc/nNlAZAkDcEhpQNMSRXDHywAkqRheFLpAFNQzfAHC4AkaRhqLwBVDX+wAEiStFHVDX+wAEiShuGHpQOsU5XDHywAkqRhqLEAVDv8wQIgSRqGu0oHmFDVwx+8EJAkaQAquxBQ9cMf3AGQJA1AZj4I3Fg6xxqMYviDBUCSNBx/UzrAKkYz/MECIEkajmuBh0uH2I1RDX+wAEiSBiIzvwdcWTrHMkY3/MGTACVJAxIRhwPfBvYpnaU3yuEP7gBIkgYkM+8ALi+dozfa4Q/uAEiSBiYiNgF/DxxfMMaohz+4AyBJGpjMfAA4HbinUITRD3+wAEiSBigzvwucCeyc80M3MfzBAiBJGqjMvBH4XbqhPA93Aie1MPzBcwAkSQMXEc+gu0bAkTN8mJuB0zPzBzN8jEFxB0CSNGiZ+Q3gucDfzughPgg8r6XhDxYASVIFMvOezDwF+C3g/0zpbj8LnJCZr8zM7VO6z2p4CECSVJ2IOAN4LXASk1006KfAp4HL+3MMmmUBkCRVKyL2pSsBpwBPBQ7tbwfQvY3wTmAbsBW4Hvi7zPxFmbTDYgGQJKlBngMgSVKDLACSJDXIAiBJUoMsAJIkNcgCIElSgywAkiQ1yAIgSVKDLACSJDXIAiBJUoMsAJIkNcgCIElSgywAkiQ1yAIgSVKDLACSJDXIAiBJUoMsAJIkNcgCIElSgywAkiQ1yAIgSVKDLACSJDXIAiBJUoMsAJIkNcgCIElSgywAkiQ1yAIgSVKDLACSJDXIAiBJUoMsAJIkNWjP0gEkqVYRcTRwGrAZOGzRDWDbotvNwLWZeWuJnNJyIjOJiCwdZCWZGaUzSBJARBwCnA+cATx9wi//FvBx4N2Zede0s0mTsABI0hpExP7A64ELgP02eHcPApcB/zUz799oNmk9LACStIqIOBO4HHjilO/6R8B5mXn1lO9XWpUnAUrSbkTnbcBHmP7wp7/Pj0TE2yLCH3Q0V+4ASNIyImI/4K+B0+f0kNcAZ2fmg3N6PDXOAiBJS/Q/jX+c+Q3/BdcAZ2TmoNdkjYOHACRpV29l/sOf/jHfWuBx1SB3ACRpkf6Ev48UjvFyTwzUrFkAJKnXv9XvNmZzwt8kfgQc5VsENUseApCkX3o95Yc/dBleXzqExs0dAEnikSv83crGL/IzLQ8CR3vFQM2KOwCS1Dmf4Qx/6LKcXzqExssCIEmdM0oHWMYQM2kkLACSmtd/qt+kH+wzD0/vs0lTZwGQpO4jfYdqyNlUMQuAJMHm0gFWMORsqpgFQJLgsNIBVjDkbKqYBUCShj1kh5xNFbMASNKwh+yQs6liXghIUvNcA9UidwAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJapAFQJKkBlkAJElqkAVAkqQGWQAkSWqQBUCSpAZZACRJatBCAdhRNMUqImJT6QySxqmC9WXQ67PqtVAA7i+aYnWHlQ4gabSGvr4MfX1WpRYKwANFU6xu6C9QSfUa+voy9PVZlXIHQFLrhr6+DH19VqUsAJJaN/T1ZejrsypVSwE4tHQASaM19PVl6OuzKuU5AJJaN/T1ZejrsypVyw7A0F+gkuo19PVl6OuzKrVQAO4ummJ1x0fEnqVDSBqXfl05vnSOVQx9fValFgrA1qIpVncA8ILSISSNzgvo1pchG/r6rEotFIBbiqZYm5eVDiBpdGpYV2pYn1WhyEwi4iDgR6XDrOL2zPzV0iEkjUdEfB84onSOVTwxM+8pHULj8xiA/h/XjwtnWc0REbG5dAhJ49CvJ0Mf/j92+GtWFn8aYA3bTDVs10mqQw3rSQ3rsiq1uADUcKJJDS9YSXWoYT2pYV1WpWorAM+IiGNLh5BUt34deUbpHGtQw7qsSi0uAP9YLMVk3lI6gKTq1bKO1LIuq0KRmd0vIvYF7gP2KppobU7IzC+XDiGpPhHxXOCm0jnWYAdwQGY+VDqIxumRHYD+H9mXCmaZxDtKB5BUrVrWjy85/DVLj1ny+88VSTG5F0TEqaVDSKpLv27UclXRWtZjVarWAgDw9ojYo3QISXXo14u3l84xgZrWY1VoaQG4Cahly+k44JzSISRV4xy6daMGD1HHeQqq2KMKQGbuALYUyrIeb4uIg0uHkDRs/TrxttI5JrClX4+lmVm6AwBww9xTrN+hwMciooZ3LkgqoF8fPka3XtSipnVYlVquAFw99xQbcyLwl6VDSBqsv6RbJ2pS2zqsCu1SADLzO9R1GADgNRHxx6VDSBqWfl14TekcE9rSr8PSTC23AwDwgbmmmI7LIuLflg4haRj69eCy0jnWocb1VxV65EqAj/rDiAOAO4G9555oY+6ju0rgt0sHkVRORDyN7iz6A0pnmdDPgUMz877SQTR+y+4A9P/4rptzlmk4ALi+f/FLalD/+r+e+oY/wHUOf83L7g4BQL3bUEcDN3k4QGpP/7q/iW4dqFGt664qtOwhAICIeCzdYYAD55poeh4GLsjMd5UOImn2+hP+LgNqvULovXTb/78oHURt2O0OQP+P8Io5Zpm2PYC/iIgrvE6ANF4RsVdEXAH8BfUOf4ArHP6ap93uAMAjV8/6Z+Bx8wo0I1uA38nMu0sHkTQ9/Rr1Mep7n/9S24Ffc43SPK10DgD9P8b3zCnLLJ0IfDUiXuMHCEn1i4g9IuI1wFepf/gDvMfhr3lbcQcAICIOB24DxrKN/k3gosys8V0OUvP6j/R9O/V8sM9qdgBHZeYdpYOoLSvuAAD0/yivnH2UuTkO+GRE3BgRzy0dRtLaRMRzI+JG4JOMZ/gDXOnwVwmr7gAARMSRwD8Be8480fxdDbw5M28pHUTSriLiWOAtwJmls8zATuDXM/O7pYOoPWsqAAARcRXwB7ONU9Q3gE8An8jMm0uHkVoWEZuBl/W3ZxSOM0vvz8xzSodQmyYpAEfSHT+v/R0Ba3E7fRkAvpCZOwvnkUYtIvYEns8vh/4RZRPNxXbgOH/6VylrLgAAEfEm4G2zizNI9wFfB7b1tzsX/XobsC0zHygXTxq+iNgEHLbkduiiXx9PnZfu3YiLM/PS0iHUrkkLwF7A14BjZpZIksZvK/DMzNxROojateq7ABbr/7GeN6MsktSK8xz+Km2iAgCQmTcAH55BFklqwYf7dVQqaqJDAI98UcQhdFtYj596Ikkar58Cx2TmXaWDSBPvAAD0/3j/dMpZJGns/tThr6FY1w4AQEQEcC1w6lQTSdI4XQeclutddKUpW3cBAIiIA4Gv0MZ7diVpvW4Hnp2Z95YOIi1Y1yGABf0/5rPoLmcpSdrVTuAsh7+GZkMFACAztwAXTyGLJI3Rxf06KQ3Khg4BPHIn3fkA1wOnjkXFKQAAA15JREFUbPjOJGk8PgW8xOP+GqKpFACAiDgI+Crw5KncoSTV7QfAszLzntJBpOVs+BDAgv4f+UuAn0zrPiWpUj+h+8nf4a/BmloBAMjMrwEvBX42zfuVpIr8DHhpvx5KgzXVAgCQmV8Efh94eNr3LUkD9zDw+/06KA3a1AsAQGZeA7xuFvctSQP2un79kwZvJgUAIDOvAN44q/uXpIF5Y7/uSVWY2rsAdvsAEe8ALpzpg0hSWe/MzDeUDiFNYmY7AAv6F4U7AZLG6o0Of9Vo5jsAjzxQxLnAfwf2mMsDStJsPUx3zN9tf1VpbgUAICJOB/4nsM/cHlSSpu9ndGf7e8KfqjXXAgAQEc8DPgk8Ya4PLEnT8RO69/n7Vj9Vbe4FACAinkn32QFeNlhSTX5Ad4U/L/Kj6s38JMDl9C+eZ9F9UIYk1eBTdNf2d/hrFIoUAHjUZwdcRPd52ZI0RDvp1imv7a9RKXIIYJcQEScCHwaOKJ1Fkha5HTgrM7eUDiJNW7EdgMX6F9ezgetKZ5Gk3nXAsx3+GqtBFACAzLwXOA04H/hp4TiS2vVTunXotH5dkkZpEIcAloqIQ4A/B84qnUVSUz4M/KfMvKt0EGnWBlkAFkTEycDlwDGls0gata3AeZl5Q+kg0rwM5hDAcvoX4zOBi4HtheNIGp/tdOvLMx3+as2gdwAWi4gjgUuAVwB7lk0jqXI7gQ8Bl2Tmd0uHkUqopgAs6IvARcCrgL3KppFUmR3AlcDbHfxqXXUFYEFEHA5cCPwh8LjCcSQN23bgPcA7M/OO0mGkIai2ACyIiIOBC4BzgQMLx5E0LPcCVwCXZebdpcNIQ1J9AVgQEY+lu7TwK4FTgb3LJpJUyM/pLuLzAeD6zPxF4TzSII2mACwWEQcAL6crAycWjiNpPrbQDf2PZOZ9pcNIQzfKArBYRDwVOBM4ma4M7Fs2kaQpeYhu6N8AXJ2Z3ymcR6rK6AvAYhGxF3ACcFJ/+018J4FUix3Al4DP9bebMnNH2UhSvZoqAEtFxL50uwLPobva4DHAscCvlMwliR8Dt9BdoW8r8I/Alsx8qGgqaUSaLgC7ExEH8csycAxwMLA/sKn/7/5Lfu8ugrSyHcD9wAP9f+9f8vu76Qb9LcDWzLynUE6pGf8fqAYCEFmyikcAAAAASUVORK5CYII="
    />
  </svg>
)

export default SvgComponent
