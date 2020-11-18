import {
	Container,
	createMuiTheme,
	ThemeProvider,
	Typography,
} from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import "fontsource-roboto";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { validarCPF, validarSenha } from "./models/cadastro";

function App() {
	return (
		<Container component="article" maxWidth="sm">
			<ThemeProvider theme={theme}>
				<Typography variant="h3" component="h1" align="center">
					Formulário de Cadastro
				</Typography>
				<ValidacoesCadastro.Provider
					value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
				>
					<FormularioCadastro aoEnviar={aoEnviarForm} />
				</ValidacoesCadastro.Provider>
			</ThemeProvider>
		</Container>
	);
}

function aoEnviarForm(dados) {
	console.log(dados);
}

const theme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: "#d500f9",
		},
	},
});

export default App;
