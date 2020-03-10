# Sub-Project Overview

This project describes modules, event, event arguments, Event Emitter.

## Playlist(s)

[Dotnet](https://www.youtube.com/playlist?list=PL8598C97BA1D871C1)

[blah](https://www.youtube.com/watch?v=HjyBzx23h98)

## DotNet Compiling VB/C# from command line

[Part1: How DotNet executes](https://www.youtube.com/watch?v=ruf4U9_Rbss&list=PL8598C97BA1D871C1) 

Code/Native

Code/IL/CLR/Native

```python
csc /target:library /out:myCsLib.dll myCsLib.cs
vbc /target:library /out:myVbLib.dll myVbLib.vb
```

```python
csc /r:myCsLib.dll /r:myVbLib.dll MainClass.cs
csc  /keyfile:MyStrongKey.snk /r:target::library /out:myCSLib.dll myCsLib.cs
ildasm /out:my.txt MyDll.dll
```

Not an exe
Can disassemble

```python
csc /t:module /out:MeFirstModule.netmodule MainClass.cs
```

### Disassembler of EXE/DLL

[Part 2: Disassembler(s)](https://www.youtube.com/watch?v=D_1Op4TBM-Y&list=PL8598C97BA1D871C1&index=2) 

Assembly Consists of:
- Manifest
- Intermediate Language (IL)

Tools are executed in the Visual Studio Command Prompt

INSERT

Tools
* ildasm.exe
*   Manifest, metadata
* ilasm.exe
  * Reconstruct the text output back to the exe
  * The *.il text file is read

[Part 3: Weak Name and Strong Name Assembly](https://www.youtube.com/watch?v=9YjfsXQtHIg&list=PLRwVmtr-pp06rfSgNYu_oBg40DkwXiRHt&index=23) 
- Two type of assemblies
  - Strong Name: Signing with a public/private key pair
  - Weak Name: not signed
- Typical DotNet Install: 
  - DotNet Framework (System Assembly)
  - Runtime Environment (CLR)
- GAC (Global Assembly Cache)
  - System Wide Assemblies are stored here
  - Location: C:\Windows\Assemblies
    - MSIL
- Assembly name "FRAME_VER_PKT_Name"
  - Version (VER)
  - Culture, Typically Languange Netural, en
    - When set, it becomes a satilite assembly
  - Public Key Token (PKT)
    - Sign assembly with public/priviate
    - Use strong nameing tool
      - sn.exe -k c:\MyStrongKey.snk
      - Save in Assembly.cs
```python
[assembly: AssemblyKeyFIle("sn.exe -k c:\MyStrongKey.snk")]
```

[Part 4: Global Assembly Cache](https://www.youtube.com/watch?v=FYmRrEYyhCM&list=PL8598C97BA1D871C1&index=4) 

Installing
```python
gacUtil.exe -i myDll.dll
```
UnInstalling all, do not pass '.dll'
```python
gacUtil.exe -u myDll
```

UnInstalling a specific version
```python
gacUtil.exe -u myDll,Version=1.0.0.0,PublicKeyToken=deadbeef
```

Side-By-Side execution

[Part 5: How DotNet finds assemblies during execution](https://www.youtube.com/watch?v=FYmRrEYyhCM&list=PL8598C97BA1D871C1&index=5) 

- Figures out what version is needed
  - Checks the manifest that contains the dependent assemblies
    - These can be overwritten by configuration file
  - Checks the application configuration file (app.config)
    - app.config
    - machine.config
    - policies
  - If weak, search of the GAC is skippped
    - Searches in local directory
    - Version checking is not done for 'weak' assemblies
