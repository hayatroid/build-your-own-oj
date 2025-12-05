---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Build your own OJ
  tagline: We are going to build OJ from scratch. Step by step.
  actions:
    - theme: brand
      text: はじめる
      link: /prototype/
    - theme: alt
      text: スライド (準備中)
      link: /slides/
      target: '_blank'
    - theme: alt
      text: ポータル
      link: https://traonboard.ing
      target: '_blank'

features:
  - title: 第一部：プロトタイプをつくる
    details: オンラインジャッジ構築のメンタルモデルとして、GitHub Actions のアーキテクチャ (Workflows, Jobs, Artifacts) を紐解きます。
    link: /prototype/
  - title: 第二部：Runner をつくる (準備中)
    details: オンラインジャッジ構築の実現手段として、AWS のサービス (EC2, S3, SQS) を紐解きます。
    link: /runner/
  - title: 第三部：Server をつくる (準備中)
    details: 作問者向けの DSL をつくり、幅広い問題に対する判定パイプラインを組めるようにします。
    link: /server/
---
