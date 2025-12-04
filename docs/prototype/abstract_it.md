# ぐっと睨む

## すべての Job は入力・実行・出力で表せる

|       | 入力                           | 実行               | 出力     |
| ----- | ------------------------------ | ------------------ | -------- |
| build | `SUBMISSION=fn main() { ... }` | `cargo build` など | バイナリ |
| run   | バイナリ、`TESTCASE=1 2`       | `./worker` など    | `3`      |

## すべての入出力を Artifacts で表す

- 入力はすべて Artifacts のダウンロードで行う。
- 出力はすべて Artifacts のアップロードで行う。

## すべての実行を Docker Image で表す

- 実行はすべて Artifacts をマウントした Docker 上で行う。
  - 入力はすべて readonly でマウントしたフォルダから受け取る。
  - 出力はすべて writable でマウントしたフォルダへ書き出す。
