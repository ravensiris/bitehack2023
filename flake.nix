{
  description = "Development environment";
  inputs = {
      nixpkgs = { url = "github:NixOS/nixpkgs/nixpkgs-unstable"; };
      flake-utils = { url = "github:numtide/flake-utils"; };
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        inherit (nixpkgs.lib) optional;
        pkgs = import nixpkgs {
          inherit system;
          config = { allowUnfree = true; };
        };
      in
      {
          devShell = pkgs.mkShell
          {
            buildInputs =
              (with pkgs; [
                glibcLocales
                nodejs
                inotify-tools
                unzip])
              ++ [
		    (pkgs.vscode-with-extensions.override {
		    vscodeExtensions = with pkgs.vscode-extensions; [
          bradlc.vscode-tailwindcss
          formulahendry.auto-close-tag
          vscodevim.vim
        ]

      ++ pkgs.vscode-utils.extensionsFromVscodeMarketplace [
          {
            name = "volar";
            publisher = "Vue";
            version = "1.0.24";
            sha256 =
              "sha256-pn+J5D/6YtQDXAGlDj7KcmAcuc9uUblfdZOIU38uvaM=";
          }];
        })];
              shellHook = ''
                export LANG=en_US.UTF-8
            '';
          };
      }
    );
}
